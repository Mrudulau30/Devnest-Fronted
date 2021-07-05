import react from "react";
import './chessboard.css';

        let arr = []
        for(let i = 0; i < 64; ++i) arr.push(i)
        function Chessboard() {
            return  (<div className="outer-box">
                        {arr.map(num => <div className ="small" id={(num+Math.floor(num/8))%2==0?"black": "white"}> </div>)}
                    </div>)
        }
    




export default Chessboard ;