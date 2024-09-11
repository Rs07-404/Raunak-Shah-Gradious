document.getElementById('files').addEventListener('change', async function(event){
    document.getElementById('other').style.display = "none";
    document.getElementById("fileLink").setAttribute("href", '#');
        document.getElementById("fileLink").innerText = "";
    let pass = true;
    const file = event.target.files[0];
    document.getElementById('fileName').value = file.name;
    const link = await fileUpload(file);
    if(link){
        document.getElementById("fileLink").setAttribute("href", link);
        document.getElementById("fileLink").innerText = link;
    }
    event.target.value = "";
})

async function fileUpload(file){
    const formData = new FormData();
    formData.append('file',file);

    try{
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });
        if(response.ok){
            const result = await response.json();
            return result["link"];
        }else{
            const data = await response.json()
            const error = data.error;
            document.getElementById("other").innerHTML = error;
            document.getElementById('other').style.display = "block";
        }

    }catch(error){
        document.getElementById("other").innerHTML = error.message;
            document.getElementById('other').style.display = "block";
    }

}