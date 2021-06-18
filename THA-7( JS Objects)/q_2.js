/* Write a JavaScript program to delete the rollno property from the following object.
 Also print the object before or after deleting the property. 
 Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; */

 const student ={
    name : "David Rayy", 
    sclass : "VI",
     rollno : 12 
 }
 console.log("Object initially is as follows: ")
 console.log( student); 

 delete student.rollno;
 console.log( "Object after delete operation is as follows: ")
 console.log(student);