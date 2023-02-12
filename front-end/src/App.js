import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen"
import PaymentScreen from "./screens/PaymentScreen";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
   
    <main className="py-3">
      <Container>
        <Routes>
          <Route path='/shipping' element={<ShippingScreen />} exact />
          <Route path='/payment' element={<PaymentScreen />} exact />
          <Route path='/login' element={<LoginScreen />} exact />
          <Route path='/register' element={<RegisterScreen />} exact />
          <Route path='/profile' element={<ProfileScreen />} exact />
          <Route path='/product/:id' element={<ProductScreen />} />
          <Route path='/cart/:id?' element={<CartScreen />} />
          <Route path='/' element={<HomeScreen />} exact />
        </Routes>
      </Container>
    </main>
  
      <Footer />
    </BrowserRouter>
  );
}

export default App;
