issueList = document.getElementById("issues");
issueForm = document.getElementById("addIssue");

// Read Issue
function fetchdata(){
    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            loaddata(JSON.parse(this.responseText));
        }
    };
    req.open("GET","https://665416871c6af63f467657c2.mockapi.io/issues/v1/Issues")
    req.send();
}

function loaddata(data){
    issueList.style.display = "flex";
    issueForm.style.display = "none";
    const table = document.getElementById("table");
    table.innerHTML = `<div class="th">
    <div>#</div>
    <div>Issue Id</div>
    <div>Description</div>
    <div>Assignee</div>
    <div>Priority</div>
    <div>Edit</div>
    <div>Delete</div>
</div>`
    for(let issue in data){
        let new_row = document.createElement("div");
        new_row.classList.add("tr");
        new_row.innerHTML = `<div>${parseInt(issue)+1}</div>
        <div id="id${data[issue]['id']}">${data[issue]['issue_id']}</div>
        <div id="des${data[issue]['id']}">${data[issue]['Description']}</div>
        <div id="assignee${data[issue]['id']}">${data[issue]['Assignee']}</div>
        <div id="prior${data[issue]['id']}">${data[issue]['Priority']}</div>
        <div id="edit${data[issue]['id']}"><button class="edit_btn btn" onclick="edit_issue(${data[issue]['id']});">Edit</button></div>
        <div><button class="delete_btn btn" onclick="delete_popup(${data[issue]['id']}, ${data[issue]['issue_id']});">Delete</button></div>`
        table.appendChild(new_row);
    }
}



// Add Issue
document.getElementById("add").addEventListener("click",()=>{
    issueList.style.display = "none";
    issueForm.style.display = "flex";
    document.getElementById('issue_id').value = '';
    document.getElementById('des').value = '';
    document.getElementById('assignee').value = '';
});

issueForm.addEventListener("submit",async (event)=>{
    event.preventDefault();
    await add_issue();
    fetchdata();
});
issueForm.addEventListener("keypress",async (event)=>{
    if(event.key === "Enter"){
        await add_issue();
        fetchdata();
    }
});

async function add_issue(event){
    let issue_id = document.getElementById('issue_id').value;
    let des = document.getElementById('des').value;
    let assignee = document.getElementById('assignee').value;
    let priority = document.getElementById('priority').value;

    let new_issue = JSON.stringify({
        issue_id: issue_id,
        Description: des,
        Assignee: assignee,
        Priority: priority
    });

    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            fetchdata();
        }
    };
    req.open("POST","https://665416871c6af63f467657c2.mockapi.io/issues/v1/Issues");
    req.setRequestHeader("Content-Type", "application/json");
    await req.send(new_issue);
    await fetchdata();
    fetchdata();
};

function cancel_add(){
    issueList.style.display = "flex";
    issueForm.style.display = "none";
}

// Edit Issue
function edit_issue(id){
    document.getElementById(`edit${id}`).innerHTML = `<span style="display:block;">
    <button class="save_btn btn" onclick="save_issue(${id});">Save</button>
    <button class="delete_btn btn" onclick="fetchdata();">Cancel</button></span>`;
    let id_element = document.getElementById(`id${id}`);
    id_element.innerHTML = `<input type="number" name="id" id="issue_id" value="${id_element.textContent}">`;
    let des_element = document.getElementById(`des${id}`);
    let des_value = des_element.textContent;
    des_element.innerHTML = `<textarea name="desscription" id="des" value="${des_element.textContent}">`;
    let assignee_element = document.getElementById(`assignee${id}`);
    assignee_element.innerHTML = `<input type="text" name="assignee" id="assignee" value="${assignee_element.textContent}">`;
    let prior_element = document.getElementById(`prior${id}`);
    prior_element.innerHTML = `<select id="priority" name="Priority">
    <option value="none">Select Priority</option>
    <option value="Very Low">Very Low</option>
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
    <option value="Very High">Very High</option>
    </select>`
    document.getElementById("des").value = des_value;
}

async function save_issue(id){
    let issue_id = document.getElementById('issue_id').value;
    let des = document.getElementById('des').value;
    let assignee = document.getElementById('assignee').value;
    let priority = document.getElementById('priority').value;

    let issue = JSON.stringify({
        issue_id: issue_id,
        Description: des,
        Assignee: assignee,
        Priority: priority
    });

    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            fetchdata();
        }
    };
    req.open("PUT",`https://665416871c6af63f467657c2.mockapi.io/issues/v1/Issues/${id}`);
    req.setRequestHeader("Content-Type", "application/json");
    await req.send(issue);
    await fetchdata();
    fetchdata();
}

// Delete Issue
function delete_popup(id, issue_id){
    let new_popup = document.createElement('div');
    new_popup.classList.add('popup_area')
    new_popup.setAttribute("id","popup");
    new_popup.innerHTML = `
    <div class="popup"><div class="pop_top"><P>Confirm the Issue Id</P><div class="cross"><svg onclick="remove_popup();" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="16" height="16"><path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"/></svg></div></div>
    <div class="que">Deleting issue with issue id ${issue_id}?
    <div class="button"><button onclick="delete_issue(${id})" class="btn delete_btn">Delete</button><button onclick="remove_popup();" class="btn cancel_btn">Cancel</button</div>
    </div>`
    document.body.appendChild(new_popup);
    new_popup.style.top = `${window.scrollY}px`;
    console.log(window.scrollY)
    document.addEventListener("scroll",()=>{
        new_popup.style.top = `${window.scrollY}px`;
        console.log(window.scrollY)
    })
}

function remove_popup(){
    let popup = document.getElementById('popup');
    document.body.removeChild(popup);
}

function delete_issue(id){
    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            remove_popup();
            fetchdata();
        }
    };
    req.open("DELETE",`https://665416871c6af63f467657c2.mockapi.io/issues/v1/Issues/${id}`);
    req.setRequestHeader("Content-Type", "application/json");
    req.send();
}


window.onload = fetchdata();