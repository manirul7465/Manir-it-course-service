import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';

import Allservice from './Pages/Allservice/Allservice';
import Addporduct from './Pages/Dashboard/Addporduct';
import AdminRout from './Pages/Dashboard/AdminRout';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import Manageproduct from './Pages/Dashboard/Manageproduct';
import Myorder from './Pages/Dashboard/Myorder';
import Payment from './Pages/Dashboard/Payment';
import Review from './Pages/Dashboard/Review';


import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Registration from './Pages/Login/Registration';
import NotFound from './Pages/NotFound/NotFound';
import Order from './Pages/Order/Order';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
   
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Allservice" element={<Allservice/>}/>
          <Route path="/Dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}>
          <Route path={`/Dashboard/payment/:orderId`} element={<Payment/>}/>
          <Route path="myorders" element={<Myorder/>}/>
          <Route path="review" element={<Review/>}/>
          <Route path="addproduct" element={<AdminRout><Addporduct/></AdminRout>}/>
          <Route path="manageproduct" element={<AdminRout><Manageproduct/></AdminRout>}/>
          <Route path="manageallorder" element={<AdminRout><ManageAllOrders/></AdminRout>}/>
          <Route path="makeadmin" element={<AdminRout><MakeAdmin/></AdminRout>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="registration" element={<Registration/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/order/:orderId" element={<PrivateRoute><Order/></PrivateRoute>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
    
  );
}


export default App;
