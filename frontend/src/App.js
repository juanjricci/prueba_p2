//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from './components/Navigation';
import ListProducts from './components/ListProducts';
import Cart from './components/Cart';
import Producto from './components/Producto';
import Register from './components/Register';


function App() {
  return (
    <Router>
      <Navigation/>
      <Route exact path="/" component={ListProducts}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/producto/:id" component={Producto}/>
      <Route path="/register" component={Register}/>
    </Router>
  );
}

export default App;
