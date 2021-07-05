import "./chess.css"

let arr=[]
for(let i=0;i<64;i++){
    arr.push(i)
}
function Chess(){
    return(
    <div className="container">
             {
                arr.map(num => <div className ="small" id={(num+Math.floor(num/8))%2==0?"black": "white" }> </div>)
             }

    </div>);
}

export default Chess;