import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newPage/NewUser";
import Product from "./pages/ProductsList/Product";







 function App() {
  return (
    <Router>
        <Topbar/>
         <div className="container">
         <Sidebar/>
         <Switch>
            <Route exact path="/">
               <Home/>
            </Route>
            <Route path="/users">
               <UserList/>
            </Route>
            <Route path="/user/:userId">
               <User/>
            </Route>
            <Route path="/newUser">
               <NewUser />
            </Route>
            <Route path="/products">
               <Product />
            </Route>

         </Switch>


           </div>

    </Router>

  );
}

export default App;
