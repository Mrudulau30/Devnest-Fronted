import Block  from './chess1';
import './style.css'


function Chess(){
    let blocks = [];
    for (let i = 0; i <= 63; i++) {
      blocks.push(
        <Block
          key={i}
          className={(i + Math.floor(i / 8)) % 2 === 0 ? "black" : "white"}
        />
      );
    }
  
    return <div className="chess">{blocks}</div>;
}


export default Chess;