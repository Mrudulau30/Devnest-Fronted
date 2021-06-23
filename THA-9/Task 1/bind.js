const add={
    name:"Addition is: ",
    add1:function(a,b){
        console.log(this.name+" "+ (a+b));

    }
}
const sub={
    name:"Addition with bind call: ",
    
}

const display=add.add1.bind(sub,4,5);
display()