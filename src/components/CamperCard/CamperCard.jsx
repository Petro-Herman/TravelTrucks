import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/favoritesSlice';
import css from './CamperCard.module.css';

export default function CamperCard({ camper }) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const isFavorite = favorites.some(fav => fav.id === camper.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(camper.id));
    } else {
      dispatch(addToFavorites(camper));
    }
  };

  return (
    <div className={css.camperCard}>
      <img src={camper.image} alt={camper.name} />
      <h3>{camper.name}</h3>
      <p>Price: {camper.price.toFixed(2)}$</p>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <Link to={`/catalog/${camper.id}`}>Show More</Link>
    </div>
  );
}
