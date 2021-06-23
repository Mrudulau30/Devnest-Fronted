const add={
    name:"Addition is: ",
    add1:function(a,b){
        console.log(this.name+" "+ (a+b));

    }
}
const sub={
    name:"Addition with apply call: ",
    
}

add.add1.apply(sub,[4,5]);