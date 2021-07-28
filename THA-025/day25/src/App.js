
import './App.css';
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

  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.5TcbzDOg62mitEnfi5ExjgHaE8?w=255&h=180&c=7&o=5&dpr=1.25&pid=1.7" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  );
}

export default App;
