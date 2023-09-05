import { createContext, useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Home from "./components/Home";
import Parts from "./components/Parts";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { ShopContextProvider } from "./context/shop-context";
import Footer from "./components/Footer";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  const initialLoginStatus = localStorage.getItem("token") !== null;
  const [loginStatus, setLoginStatus] = useState(initialLoginStatus);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        {/* <div className="switch">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div> */}
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/parts" element={<Parts />} />
              <Route path="/account" element={<Account />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
            <Footer />
          </Router>
        </ShopContextProvider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
