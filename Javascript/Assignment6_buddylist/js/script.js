let statuss = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
};

let users_json = [{
		userId: 1,
		name: "Jon Snow",
		profilePicture:
			"data:image/jpeg;base64,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",
		statusMessage: "We become what we think about!",
		presence: 1,
	},
	{
		userId: 2,
		name: "Daenerys Targaryen",
		profilePicture:
			"https://preview.redd.it/hlxen8gtwpm01.jpg?width=640&crop=smart&auto=webp&v=enabled&s=a3c43bcbfc1db31d542ef67071559264358b3d2b",
		statusMessage: "A positive mindset brings positivethings.",
		presence: 3,
	},
	{
		userId: 3,
		name: "Tyrion Lannister",
		profilePicture:
			"https://mir-s3-cdn-cf.behance.net/project_modules/fs/6a3f5237411193.573f25019c8bf.jpg",
		statusMessage: "One small positive thought can change your whole day",
		presence: 3,
	},
	{
		userId: 4,
		name: "Jaime Lannister",
		profilePicture:
			"https://images.nightcafe.studio/jobs/mWfF1s7OOVg5DMTYiNZ8/mWfF1s7OOVg5DMTYiNZ8--4--qccau.jpg?tr=w-1600,c-at_max",
		statusMessage: "I am a rockstar",
		presence: 1,
	},
	{
		userId: 5,
		name: "Arya Stark",
		profilePicture:
			"https://64.media.tumblr.com/21de4501827aba1c6463ce2ae6a36780/tumblr_ps5le9xxRb1w9a5vgo1_1280.jpg",
		statusMessage: "I am using Gradious messenger",
		presence: 4,
}];


function visibileUserForm(){
	hide_chat();
	document.getElementById('addUserForm').style.display = 'unset';
	let submit_button = document.getElementById('submit')
	submit_button.textContent = "Add User";
	submit_button.setAttribute("onclick",`addUser()`);
	document.getElementById('name').value = '';
	document.getElementById('statusMessage').value = '';
	document.getElementById('profilePicLink').value = '';
}


// Display Users
async function display(){
	let root = document.getElementById('root');
	root.innerHTML = '';
	for(let user in users_json){
		let user_div = document.createElement('div');
		user_div.classList.add('user');
		user_div.innerHTML = `
		<div class="img-container">
			<img src="${users_json[user]['profilePicture']}" class='user-image ${statuss[users_json[user].presence]}' alt="user image" />
		</div>
		<div class="user-detail">
		<p class="user-name">${users_json[user]['name']}</p>
		<p class="user-message">${users_json[user].statusMessage}</p>
		</div>
		<div id="menu${users_json[user].userId}" class='three-btn'>
			<div class="dropdown">
				<a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></a>
				<ul class="dropdown-menu">
					<li><button id='USR0001' onclick='deleteItem(${users_json[user].userId})'class="dropdown-item ">Delete</button></li>
					<li><button  id='update-USR0001' onclick='updateItem(${users_json[user].userId})'class="dropdown-item ">Update</button></li>
				</ul>
			</div>
		</div>
		</div>`;
		user_div.addEventListener('click',()=>{
			change_chat(users_json[user].userId)
			show_chat();
		});
		root.appendChild(user_div);
		document.getElementById(`menu${users_json[user].userId}`).addEventListener('click',(event)=>{
			event.stopPropagation();
		});
	}
};
//Add user
function addUser(){
	let new_user = {
		userId: users_json.length + 1,
		name : document.getElementById('name').value,
		profilePicture : document.getElementById('profilePicLink').value,
		statusMessage : document.getElementById('statusMessage').value,
		presence: parseInt(document.getElementById('presence').value)
	}
	users_json.push(new_user);
	display();
	visibileUserForm();
}

// Update User
function updateItem(id){
	hide_chat();
	document.getElementById('addUserForm').style.display = 'unset';
	let submit_button = document.getElementById('submit')
	submit_button.textContent = "Update Detail";
	submit_button.setAttribute("onclick",`updateUser(${id})`);
	submit_button.addEventListener('click',(event)=>{
		event.preventDefault();
	});
	for(let user in users_json){
		if(parseInt(users_json[user].userId) === id){
			document.getElementById('name').value = users_json[user].name;
			document.getElementById('statusMessage').value = users_json[user].statusMessage;
			document.getElementById('profilePicLink').value = users_json[user].profilePicture;
		}
	}
};

function updateUser(id){
	for(let user in users_json){
		if(parseInt(users_json[user].userId) === id){
			users_json[user].name = document.getElementById('name').value;
			users_json[user].statusMessage = document.getElementById('statusMessage').value;
			users_json[user].profilePicture = document.getElementById('profilePicLink').value;
			users_json[user].presence = document.getElementById('presence').value;
			break;
		}
	}
	display();
	show_chat();
};

document.getElementById("submit").addEventListener('click',(event)=>{
	event.preventDefault();
});
// Delete User
function deleteItem(id){
	for(let user in users_json){
		if(parseInt(users_json[user].userId) === parseInt(id)){
			users_json.splice(user, 1);
			break;
		}
	}
	// await display();
	display();
}

// Show Chat Window
function show_chat(){
	document.getElementById('addUserForm').style.display = 'none';
	document.getElementById('chat_window').style.display = "flex";
}

//hide chat
function hide_chat(){
	document.getElementById('chat_window').style.display = "none";
}

//Change Chat profile icon
function change_chat(id){
	for (let user in users_json){
		if(parseInt(users_json[user].userId) === id){
			document.getElementById('current_chat_profile').setAttribute('src',`${users_json[user].profilePicture}`);
			break;
		}
	}
}

window.onload = display();