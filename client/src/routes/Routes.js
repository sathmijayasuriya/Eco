import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dashboard from "../pages/Dashboard";
import AddProduct from "../pages/product/AddProduct";
import ProductView from "../pages/product/ViewProduct";



function AppRoutes() {
    return (
      <Router>
        {/* <Header/> */}
      <Switch>

        <Route path="/Dashboard" exact component={Dashboard}/>
        <Route path="/AllProduct" exact component={ProductView} />
        <Route path="/AddProduct" exact component={AddProduct} />
      
      </Switch>
        <Footer/>
      </Router>

    );
}

export default AppRoutes;