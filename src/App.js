import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Card username="Tom" email="tomford@gmail.com" phone="+123456789"/>
      <Footer />
    </div>
  );
}

export default App;
