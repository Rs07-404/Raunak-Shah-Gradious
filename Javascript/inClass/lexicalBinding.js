const name = "hari";
const employee = {
    name: "Kore",
    call: function(){
        console.log(this)
    },
    call2: ()=>{
        console.log(this)
    }

}


employee.call()
employee.call2.call(employee);
