import './App.css';
import Header from './Component/Header';
import Carousel from './Component/Carousel';
import SmartPhone from './Component/SmartPhone';
import Laptop from './Component/Laptop';
import Footer from './Component/Footer';
function App() {
  return (
    <div className="App bg-dark">
      <Header/>
      <Carousel/>
      <SmartPhone/>
      <Laptop/>
      <Footer/>
    </div>
  );
}

export default App;
