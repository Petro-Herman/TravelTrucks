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
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleFilterChange = newFilters => {
    setSelectedFilters(newFilters);
  };

  const filteredCampers = campers.filter(camper => {
    if (selectedFilters.length === 0) return true;
    return selectedFilters.every(filter => camper.features.includes(filter));
  });

  const loadMore = () => {
    setShowMore(showMore + 6);
  };

  return (
    <section className={css.catalog}>
      {/* <h2>Camper Catalog</h2> */}
      {/* <Filters onFilterChange={() => {}} /> */}
      <Filters
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
      />
      {loading ? (
        <Loader />
      ) : (
        <CamperList campers={filteredCampers.slice(0, showMore)} />
      )}
      {showMore < filteredCampers.length && (
        <button className={css.loadMoreBtn} onClick={loadMore}>
          Load More
        </button>
      )}
      {/* {loading ? <Loader /> : <CamperList campers={campers} />} */}
    </section>
  );
}
