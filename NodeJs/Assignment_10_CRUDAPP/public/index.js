const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const content = document.getElementById('content');
searchBar = document.getElementById("search");
itemList = document.getElementById("items");

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}


function showsignup(){
    signupForm.style.display="flex";
    loginForm.style.display="none";
    content.style.display="None";
}

function showlogin(){
    signupForm.style.display="none";
    loginForm.style.display="flex";
    content.style.display="None";
}

function hideLogin(){
    if(getCookie("token")){
        signupForm.style.display="none";
        loginForm.style.display="none";
        content.style.display="flex";
    }
}

function checkAuth() {
    const token = getCookie('token');
    if (!token) {
        showlogin();
    } else {
        hideLogin();
        hideCart();
        fetchdata();
    }
}

function logout(){
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
}


function fetchdata() {
    const token = getCookie("token");
    if(token){
        let req = new XMLHttpRequest();
        req.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                loaddata(JSON.parse(this.responseText));
            }
        };
        req.open("GET","http://localhost:5000/items/");
        req.setRequestHeader('Authorization', `Bearer ${token}`);
        req.send();
    }
}

function fetchitem(id){
    const token = getCookie("token");
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
    req.open("GET",`http://localhost:5000/items/${id}`);
    req.setRequestHeader('Authorization', `Bearer ${token}`);
    req.send();
}

searchBar.addEventListener("input",()=>{
    const id = searchBar.value;
    fetchitem(parseInt(id));
})


function loaddata(data){
    itemList.style.display = "flex";
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
    <div>Add to Cart</div>
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
        <div><button id="add${data[item]['id']}" class="add-item" onclick="addtoCart(${data[item]['id']});">Add to Cart</button></div>`
        table.appendChild(new_row);
    }
    hideLogin();
}

function addtoCart(itemId) {
    const token = getCookie("token");
    const addButton = document.getElementById(`add${itemId}`);
    fetch(`/cart/${itemId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            addButton.innerHTML = "Added";
            setTimeout(() => {
                addButton.innerHTML = "Add to Cart";
            }, 2000);
        } else {
            console.error('Error adding to cart:', data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


function hideCart(){
    document.getElementById("items").style.display = "unset";
    document.getElementById("listHeading").innerHTML = "Items";
    document.getElementById("cart").style.display = "None"
    document.getElementById("cancelCart").style.display = "None";
}

function loadCart() {
    const token = getCookie("token");
    document.getElementById("items").style.display = "none";
    document.getElementById("listHeading").innerHTML = "Cart Items";
    document.getElementById("cart").style.display = "unset";
    document.getElementById("cancelCart").style.display = "unset";
    const table = document.getElementById("cartTable");
    fetch(`http://localhost:5000/cart`,{
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.cart && data.cart.length > 0) {
                table.innerHTML = `<div class="th">
                    <div>#</div>
                    <div>Item Id</div>
                    <div>Name</div>
                    <div>Description</div>
                    <div>Price</div>
                    <div>Category</div>
                    <div>Quantity</div>
                    <div>Brand</div>
                    <div>Weight</div>
                    <div>Color</div>
                    <div>Remove</div>
                </div>`;

                data.cart.forEach((cartItem, index) => {
                    const item = cartItem.item;
                    let new_row = document.createElement("div");
                    new_row.classList.add("tr");
                    new_row.innerHTML = `
                        <div>${index + 1}</div>
                        <div id="id${item.id}">${item.id}</div>
                        <div id="name${item.id}">${item.name}</div>
                        <div id="des${item.id}">${item.description}</div>
                        <div id="price${item.id}">${item.price}</div>
                        <div id="category${item.id}">${item.category}</div>
                        <div id="quantity${item.id}">${item.quantity}</div>
                        <div id="brand${item.id}">${item.brand}</div>
                        <div id="weight${item.id}">${item.weight}</div>
                        <div id="color${item.id}">${item.color}</div>
                        <div id="remove${item.id}"><button class="cancel" onclick="removeFromCart(${cartItem.cart_id});">Remove</button></div>
                    `;
                    table.appendChild(new_row);
                });
            } else {
                table.innerHTML = `<div class="th">
                    <div>No Items in Cart</div>
                </div>`;
                console.log("No items found in the cart.");
            }
        })
        .catch(error => console.error('Error loading cart:', error));
}

function removeFromCart(cartId) {
    const token = getCookie("token");
    const removeButton = document.getElementById(`remove${cartId}`);
    fetch(`/cart/${cartId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            loadCart();            
        } else {
            console.error('Error removing from cart:', data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}



async function login(username, password, isAdmin){
    const data = {
        username: username,
        password: password,
        role: isAdmin ? 'admin' : 'user'
    };

    try {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            document.cookie = `token=${result.token}; path=/;`;
            document.cookie = `user_id=${result.user_id}; path=/;`;
            document.getElementById("greeting").innerHTML = `Hi ${result.name}!`
            if(isAdmin){
                window.location.href = "http://localhost:5000/admin";
            }else{
                hideLogin();
                hideCart();
                fetchdata();
            }
        } else {
            alert(`Login failed: ${result.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during login.');
    }
}


function hideEditForm(){
    document.getElementById("formHead").innerHTML = "Add Card";
    editButton.style.display = "none";
    cancelButton.setAttribute(onclick, "hideAddForm()");
    signupForm.style.display="none";
    loginForm.style.display="none";
    content.style.display="flex";
    localStorage.removeItem("card_id");
}


document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('signupButton').addEventListener('click', async () => {
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const phone = document.getElementById('signupPhone').value;
        const username = document.getElementById('signupUsername').value;
        const password = document.getElementById('signupPassword').value;
        const repassword = document.getElementById('signupRePassword').value;

        const messageElement = document.getElementById('signupMessage');

        if (password !== repassword) {
            messageElement.textContent = 'Passwords do not match.';
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, username, email, phone, password })
            });

            const data = await response.json();

            if (response.ok) {
                messageElement.textContent = 'Signup successful!';
                login(username, password, false);
            } else {
                messageElement.textContent = `Error: ${data.message}`;
            }
        } catch (error) {
            console.error('Error:', error);
            messageElement.textContent = 'An error occurred. Please try again.';
        }
    });

    const loginButton = document.getElementById('login-button');

    loginButton.addEventListener('click', async () => {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const isAdmin = document.getElementById('isAdmin').checked;
        
        login(username, password, isAdmin);
    });

    checkAuth();

});
