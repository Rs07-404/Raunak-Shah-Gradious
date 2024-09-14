function countStudents (students , sandwiches ){// Don't change the number of parameters 
    //Please write your return statement here 
    let remains = []; 
    while (sandwiches.length !== 0 ){
         console.log(`Before Iteration `, students, sandwiches);
         if (students.length <= 0 ){
              break ; 
         }
         if (students [0] === sandwiches[0]) {
              students.shift(); 
              sandwiches.shift(); 
         }else {
              if (!sandwiches.includes(students[0])) {
                   remains.push(students.shift());
              }else if(!students.includes(sandwiches[0])){
                   break;
              }else {
                   let student = students.shift(); 
                   students.push (student); 
              }
         }
         console.log(`After Iteration `, students, sandwiches);
         console.log(' ')
    }
    return students.length + remains.length ; 
}


console.log(countStudents([0, 1, 1, 1], [0, 0, 1, 1]));