
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
      </Routes>
    </Container>
  );
}

export default App;
