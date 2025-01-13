import { NavLink } from 'react-router-dom';
import { useFavorites } from '../../../context/FavContext';
import '../ClientHeader/index.css'
const ClientHeader = () => {
  const { favorites } = useFavorites();
  return (
    <div>
        
        <header>
            <nav>
              <h1>Client</h1>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/products"}>Products</NavLink></li>
                    <li><NavLink to={"/favorites"}>Favorites <sup>{favorites.length}</sup></NavLink></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default ClientHeader