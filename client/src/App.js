
import { Routes, Route, Link } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import TopBar from './components/TopBar';
import Dashboard from './views/dashboard/Dashboard';

function App() {

  return (
    <Container>
      <Row className='mb-3'>
        <TopBar />
      </Row>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        // about route
        <Route path="/about" element={<h1>About</h1>} />
        // login route
        <Route path="/login" element={<h1>Login</h1>} />
        // settings route
        <Route path="/settings" element={<h1>Settings</h1>} />
      </Routes>
    </Container>
  );
}

export default App;
