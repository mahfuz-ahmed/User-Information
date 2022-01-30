import logo from "./logo.svg";
import "./App.css";
import userData from "./data/MOCK_DATA.json";
import { useEffect, useState } from "react";
import User from "./Compunent/User/User";
import Cart from "./Compunent/Cart/Cart";

function App() {
  const [user, setUser] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);

  useEffect(() => {
    setUser(userData);
  }, []);

  const handleOnClick = (userBtn) => {
    const newCart = [...cart, userBtn];
    setCart(newCart);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Cart cart={cart}></Cart>
        {user.map((userDetails) => (
          <User users={userDetails} handleOnClick={handleOnClick}></User>
        ))}
      </header>
    </div>
  );
}

export default App;
