import { useEffect, useState } from 'react';
import Filters from '../../components/Filters/Filters';
import Loader from '../../components/Loader/Loader';
import CamperList from '../../components/CamperList/CamperList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersSlice';
import css from './Catalog.module.css';

export default function Catalog() {
  const dispatch = useDispatch();
  const campersState = useSelector(state => state.campers);
  const { items: campers, loading } = campersState;
  const [showMore, setShowMore] = useState(6);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const loadMore = () => {
    setShowMore(showMore + 6);
  };

  return (
    <section className={css.catalog}>
      {/* <h2>Camper Catalog</h2> */}
      <Filters onFilterChange={() => {}} />
      {loading ? <Loader /> : <CamperList campers={campers} />}
      <button className={css.loadMoreBtn} onClick={loadMore}>
        Load More
      </button>
    </section>
  );
}
