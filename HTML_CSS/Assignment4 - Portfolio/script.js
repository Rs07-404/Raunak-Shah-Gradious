const form = document.forms['contact-form'];


// I used Promises to show a prompt after submitting and then reload after prompt goes off.
form.addEventListener('submit', e =>{
    new Promise(()=>{alert("Form Submitted Successfully.")}).then(()=>{ window.location.reload();});
});