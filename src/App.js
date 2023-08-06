import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MyNavbar } from './components/MyNavbar';
import {CartWidget} from './components/CartWidget';
import {ItemListContainer} from './components/ItemListContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Router>
        <MyNavbar/>
        <Routes>
            <Route path="/CartWidget" element={<CartWidget /> } />
         
            <Route path="/ItemListContainer" element={<ItemListContainer />} />
        </Routes>
       </Router>
      </header>
    </div>
  );
}

export default App;


