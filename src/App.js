
import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Slider from './components/slider/slider';
import Virtual from './components/virtual/virtual';
import Products from './components/products/products'
import Testimonals from './components/testimonals/testimonals';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Slider />
      <Virtual/>
      <Products/>
      <Testimonals/>
      <Footer/>
    </div>
  );
}

export default App;
