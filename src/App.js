import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import Home from './components/Pages/Home/Home';
import NotFound from './components/Pages/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';


import PlaceOrder from './components/Pages/PlaceOrder/PlaceOrder';
import MyOrders from './components/Pages/MyOrders/MyOrders';
import ManageOrders from './components/Pages/ManageOrders/ManageOrders';
import AddService from './components/Pages/AddService/AddService';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
            <Header></Header>
            <Switch>
            <Route exact path='/'>
              <Home></Home>            
            </Route>

            <Route path='/home'>
              <Home></Home>      
            </Route>

            <PrivateRoute path='/placeorder/:id'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/register'>
              <Register></Register>
            </Route>

            <PrivateRoute path = '/myorders'>
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute path = '/manageorders'>
              <ManageOrders></ManageOrders>
            </PrivateRoute>

            <PrivateRoute path = '/addservice'>
              <AddService></AddService>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
