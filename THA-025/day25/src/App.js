
import './App.css';
import './index.css';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import "tailwindcss/tailwind.css"
function App(props) {
  return (
  // <div style={{
  //   width:"18rem",
  //   border:"1px solidrgba(0,0,0,.125)",
  //   borderRadius:".25rem",}}>

  //   <div style={{
  //     padding:"1rem 1rem",
  //   }}>

  //     <h5 style={{
  //       marginBottom:"0.5rem",
  //       fontSize:"0.125 rem",
  //     }}>card</h5>

  //     <h6 style={{
  //       color:"#6c757d !important",
  //     }}>subtitle</h6>

  //     <p style={{
  //       marginBottom:"1 rem",
  //     }}>
  //       just few random words
  //     </p>
  //   </div>
  // </div>
//  bootstrap
<div className="main">
  
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the
      card's content.
    </p>
    <button type="button" class="btn btn-primary">Button</button>
  </div>
</div>




</div>
  );
}

export default App;
