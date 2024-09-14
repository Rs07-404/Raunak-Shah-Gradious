
Run npm start in the project folder to start the server
Note: Replace the database host, user and Password in the code with your database host, username and password.

The Postman API Json collection File is in the directory of the project.
Postman API import file name: items_api.postman_collection.json

Import Steps:
Open-Postman --> Import --> Select the postman json file


Example Requests:
• GET all items:  http://localhost:5000/items
• GET item with id: http://localhost:5000/items/1
• POST item: http://localhost:5000/items
    post data:
    ○ Body raw JSON
      {
        "name":"Tablets",
        "description":"Latest ipads with 11\" 13\" sizes with 256GB and 512GB storage.",
        "price":89900.00,
        "category":"Electronics",
        "quantity":50,
        "brand":"Apple",
        "weight":"max 582g",
        "color":"silver"
      }
    
    ○ Header
      Content-Type:application/json

• Edit item with id (PUT): http://localhost:5000/items/1
    PUT data:
    ○ Body raw JSON
      {
        "name":"Tablets",
        "description":"Latest ipads with 11\" 13\" sizes with 256GB and 512GB storage.",
        "price":89900.00,
        "category":"Electronics",
        "quantity":50,
        "brand":"Apple",
        "weight":"max 582g",
        "color":"silver"
      }
    
    ○ Header
      Content-Type:application/json

• DELETE item with id: http://localhost:5000/items/5
