import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import InventoryManager from './components/InventoryManager/InventoryManager';
import NotFound from './components/notFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Profile from './components/Profile/Profile';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/order-review">
            <Review />
          </Route>
          <Route path="/inventory-manage">
            <InventoryManager />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
