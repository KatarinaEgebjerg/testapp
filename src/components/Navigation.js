import { Link } from 'react-router-dom';
import './Navigation.css';


const Navigation = () => {
  return (
    <nav class="bg-yellow-200 border-gray-200 dark:bg-gray-900">
      <ul class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

