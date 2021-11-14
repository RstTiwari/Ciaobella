
import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch ,Route} from "react-router-dom"

function App() {
  return (
    <div className="app">
        <Router>
        <div className="app">
        <Switch>
        
        
          <Route path='/Checkout'>
          <Header />
          <Checkout />
          </Route>
         
          <Route path="/">
          <Header />
            <Home />
          </Route>
          </Switch>
        
        
         </div>
 </Router>
      
      
    
     
    </div>
  );
}

export default App;
