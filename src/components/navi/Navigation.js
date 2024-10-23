import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Navigation.css';
function Navbar1() {
  return (
    <Nav  className="nav "   variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">about</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" className='edu'>Education</Nav.Link>
      </Nav.Item>
     
     
    </Nav>
  );
}

export default Navbar1;