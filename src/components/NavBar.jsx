import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import { useLogin } from "./LoginRegistration/LoginContext";

function NavBar() {
  const { cartItems, calculateCosts } = useCart();
  const { isLoggedIn, setIsLoggedIn } = useLogin();
  const { subtotal } = calculateCosts();
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
            <Link to="/cart">
              {/** Fix this reduce function */}
              {subtotal > 0 && <>${subtotal.toFixed(2)} </>}🛒(
              {cartItems.reduce(
                (accumulator, item) => accumulator + item.quantity,
                0
              )}
              )
            </Link>
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
