
import './App.css';
import {Link, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
// import OrderData from './components/OrderData';
import OrderData2 from './components/MenuTable';
function App() {
  return (
    <>
    <Link to="/zomato_app"></Link>
    <Routes>
      <Route Exact path="/zomato_app" element={<Home/>}></Route>
      {/* <Route path="/orderdata" element={<OrderData/>}></Route> */}
      <Route path="/menuTable" element={<OrderData2/>}></Route>
    </Routes>
    </>
  );
}

export default App;
