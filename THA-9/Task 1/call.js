const applyMethod={

  name:"Call method",
   show: function(){
       console.log("Practicing with "+ this.name);
   }
}

const newMethod={
    name: "call 1 method",
}
applyMethod.show.call(newMethod)