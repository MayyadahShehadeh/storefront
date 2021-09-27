import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Categories from './components/Categories';
import Products from './components/Products';
import Cart from './components/SimpleCart';

function App() {
  return (
    <>
    <Header/>
    <Cart/>
    <Categories/>
     <Products/>
    <Footer/>
    </>
  );
}


export default App;
