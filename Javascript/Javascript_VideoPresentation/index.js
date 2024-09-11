var random_number;
document.getElementById('generate').addEventListener('click',()=>{
    random_number = Math.floor(Math.random()*(200-0+1));
    document.getElementById('number').innerHTML = `${random_number}`
})