import { Link } from "react-router-dom";
import { useLogin } from "./LoginRegistration/LoginContext";

function NavBar() {
  const { isLoggedIn, setIsLoggedIn } = useLogin();
  return (
    <nav className="sticky top-0 left-0 right-0 w-full z-50 bg-gray-800 text-white shadow">
      <ul className="flex justify-between items-center p-4 w-full m-0">
        <div className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Menu</Link>
          </li>
        </div>
        <div className="flex space-x-4">
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
