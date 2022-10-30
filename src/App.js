import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home';
import './style/style.css';
import Product from './products';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/product"
          element={
            <>
              <Header />
              <Product />
              <Footer />
            </>

          }
        />
      </Routes>

    </div>
  );
}

export default App;
