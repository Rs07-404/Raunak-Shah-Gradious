itemList = document.getElementById("items");
itemForm = document.getElementById("addItem");
searchBar = document.getElementById("search");

function fetchdata(){
    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            loaddata(JSON.parse(this.responseText));
        }
    };
    req.open("GET","http://localhost:5000/items")
    req.send();
}

function fetchitem(id){
    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(this.status == 200){
            const data = JSON.parse(this.responseText);
            if(data.length === 0){
                fetchdata();
            }else{
                loaddata(data);
            }
        }else{
            fetchdata();
        }
    };
    req.open("GET",`http://localhost:5000/items/${id}`)
    req.send();
}

searchBar.addEventListener("input",()=>{
    const id = searchBar.value;
    fetchitem(parseInt(id));
})


function loaddata(data){
    itemList.style.display = "flex";
    itemForm.style.display = "none";
    const table = document.getElementById("table");
    table.innerHTML = `<div class="th">
    <div>#</div>
    <div>item Id</div>
    <div>Name</div>
    <div>Description</div>
    <div>Price</div>
    <div>Category</div>
    <div>Quantity</div>
    <div>Brand</div>
    <div>Weight</div>
    <div>Colour</div>
    <div>Edit</div>
    <div>Delete</div>
</div>`
    for(let item in data){
        let new_row = document.createElement("div");
        new_row.classList.add("tr");
        new_row.innerHTML = `<div>${parseInt(item)+1}</div>
        <div id="id${data[item]['id']}">${data[item]['id']}</div>
        <div id="name${data[item]['id']}">${data[item]['name']}</div>
        <div id="des${data[item]['id']}">${data[item]['description']}</div>
        <div id="price${data[item]['id']}">${data[item]['price']}</div>
        <div id="category${data[item]['id']}">${data[item]['category']}</div>
        <div id="quantity${data[item]['id']}">${data[item]['quantity']}</div>
        <div id="brand${data[item]['id']}">${data[item]['brand']}</div>
        <div id="weight${data[item]['id']}">${data[item]['weight']}</div>
        <div id="color${data[item]['id']}">${data[item]['color']}</div>
        <div id="edit${data[item]['id']}"><button class="edit_btn btn" onclick="edit_item(${data[item]['id']});">Edit</button></div>
        <div><button class="delete_btn btn" onclick="delete_popup(${data[item]['id']}, ${data[item]['id']});">Delete</button></div>`
        table.appendChild(new_row);
    }
}

// Add item
document.getElementById("add").addEventListener("click",()=>{
    itemList.style.display = "none";
    itemForm.style.display = "flex";
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
    document.getElementById('price').value = '';
    document.getElementById('category').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('brand').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('color').value = '';
});

itemForm.addEventListener("submit",async (event)=>{
    event.preventDefault();
    await add_item();
    fetchdata();
});

itemForm.addEventListener("keypress",async (event)=>{
    if(event.key === "Enter"){
        await add_item();
        fetchdata();
    }
});

async function add_item(event){
    let name = document.getElementById('name').value;
    let des = document.getElementById('description').value;
    let price = document.getElementById('price').value;
    let category = document.getElementById('category').value;
    let quantity = document.getElementById('quantity').value;
    let brand = document.getElementById('brand').value;
    let weight = document.getElementById('weight').value;
    let color = document.getElementById('color').value;

    let new_item = JSON.stringify({
        name:name,
        description: des,
        price:price,
        category:category,
        quantity:quantity,
        brand:brand,
        weight:weight,
        color:color
    });

    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            fetchdata();
        }
    };
    req.open("POST","http://localhost:5000/items");
    req.setRequestHeader("Content-Type", "application/json");
    await req.send(new_item);
    await fetchdata();
    fetchdata();
};


function cancel_add(){
    itemList.style.display = "flex";
    itemForm.style.display = "none";
}

// Edit Item
function edit_item(id){
    document.getElementById(`edit${id}`).innerHTML = `<span style="display:block;">
    <button class="save_btn btn" onclick="save_item(${id});">Save</button>
    <button class="delete_btn btn" onclick="fetchdata();">Cancel</button></span>`;
    
    let name_element = document.getElementById(`name${id}`);
    let name_value = name_element.textContent;
    name_element.innerHTML = `<input type="text" name="name" id="name" value="${name_element.textContent}">`;
    document.getElementById("name").value = name_value;

    let des_element = document.getElementById(`des${id}`);
    let des_value = des_element.textContent;
    des_element.innerHTML = `<textarea type="text" name="description" id="description" value="${des_element.textContent}"></textarea>`;
    document.getElementById("description").value = des_value;

    let price_element = document.getElementById(`price${id}`);
    let price_value = price_element.textContent;
    price_element.innerHTML = `<input type="text" name="price" id="price" value="${price_element.textContent}">`;
    document.getElementById("price").value = price_value;

    let category_element = document.getElementById(`category${id}`);
    let category_value = category_element.textContent;
    category_element.innerHTML = `<input type="text" name="category" id="category" value="${category_element.textContent}">`;
    document.getElementById("category").value = category_value;

    let quantity_element = document.getElementById(`quantity${id}`);
    let quantity_value = quantity_element.textContent;
    quantity_element.innerHTML = `<input type="number" name="quantity" id="quantity" value="${quantity_element.textContent}">`;
    document.getElementById("quantity").value = quantity_value;

    let brand_element = document.getElementById(`brand${id}`);
    let brand_value = brand_element.textContent;
    brand_element.innerHTML = `<input type="text" name="brand" id="brand" value="${brand_element.textContent}">`;
    document.getElementById("brand").value = brand_value;

    let weight_element = document.getElementById(`weight${id}`);
    let weight_value = weight_element.textContent;
    weight_element.innerHTML = `<input type="text" name="weight" id="weight" value="${weight_element.textContent}">`;
    document.getElementById("weight").value = weight_value;

    let color_element = document.getElementById(`color${id}`);
    let color_value = color_element.textContent;
    color_element.innerHTML = `<input type="text" name="color" id="color" value="${color_element.textContent}">`;
    document.getElementById("color").value = color_value;

}

async function save_item(id){
    let name = document.getElementById('name').value;
    let des = document.getElementById('description').value;
    let price = document.getElementById('price').value;
    let category = document.getElementById('category').value;
    let quantity = document.getElementById('quantity').value;
    let brand = document.getElementById('brand').value;
    let weight = document.getElementById('weight').value;
    let color = document.getElementById('color').value;

    let item = JSON.stringify({
        name:name,
        description: des,
        price:price,
        category:category,
        quantity:quantity,
        brand:brand,
        weight:weight,
        color:color
    });


    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            fetchdata();
        }
    };
    req.open("PUT",`http://localhost:5000/items/${id}`);
    req.setRequestHeader("Content-Type", "application/json");
    await req.send(item);
    await fetchdata();
    fetchdata();
}


// Delete item
function delete_popup(id, item_id){
    let new_popup = document.createElement('div');
    new_popup.classList.add('popup_area')
    new_popup.setAttribute("id","popup");
    new_popup.innerHTML = `
    <div class="popup"><div class="pop_top"><P>Confirm the item Id</P><div class="cross"><svg onclick="remove_popup();" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="16" height="16"><path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"/></svg></div></div>
    <div class="que">Deleting item with item id ${item_id}?
    <div class="button"><button onclick="delete_item(${id})" class="btn delete_btn">Delete</button><button onclick="remove_popup();" class="btn cancel_btn">Cancel</button</div>
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

function delete_item(id){
    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            remove_popup();
            fetchdata();
        }
    };
    req.open("DELETE",`http://localhost:5000/items/${id}`);
    req.setRequestHeader("Content-Type", "application/json");
    req.send();
}


window.onload = fetchdata();