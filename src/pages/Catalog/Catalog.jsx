// import { useEffect, useState } from 'react';
// import Filters from '../../components/Filters/Filters';
// import Loader from '../../components/Loader/Loader';
// import CamperList from '../../components/CamperList/CamperList';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCampers } from '../../redux/campersSlice';
// import css from './Catalog.module.css';
// import { createSelector } from '@reduxjs/toolkit';

// // const selectCampers = state => state.campers.items;
// const selectCampers = state => state.campers?.items || [];
// const selectMemoizedCampers = createSelector([selectCampers], campers => [
//   ...(campers || []),
// ]);

// export default function Catalog() {
//   const dispatch = useDispatch();
//   const campers = useSelector(selectMemoizedCampers);
//   const loading = useSelector(state => state.campers.loading);
//   // const campersState = useSelector(state => state.campers);
//   // const { items: campers, loading } = campersState;
//   const [showMore, setShowMore] = useState(6);
//   const [selectedFilters, setSelectedFilters] = useState([]);
//   const campers = useSelector(selectCampers);
//   const status = useSelector(state => state.campers?.status || 'idle');

//   useEffect(() => {
//     if (!campers.length) {
//       dispatch(fetchCampers());
//     }
//   }, [dispatch, campers.length]);

//   const handleFilterChange = newFilters => {
//     if (JSON.stringify(selectedFilters) !== JSON.stringify(newFilters)) {
//       setSelectedFilters(newFilters);
//     }
//   };

//   console.log('Campers from Redux:', campers);
//   console.log('Type of campers:', typeof campers);

//   const filteredCampers = Array.isArray(campers)
//     ? campers.filter(camper =>
//         selectedFilters.every(filter => camper.features.includes(filter))
//       )
//     : [];

//   // const filteredCampers = campers.filter(camper => {
//   //   if (selectedFilters.length === 0) return true;
//   //   return selectedFilters.every(filter => camper.features.includes(filter));
//   // });

//   const loadMore = () => {
//     setShowMore(prev => Math.min(prev + 6, filteredCampers.length));
//   };

//   return (
//     <section className={css.catalog}>
//       {/* <h2>Camper Catalog</h2> */}
//       {/* <Filters onFilterChange={() => {}} /> */}
//       <Filters
//         selectedFilters={selectedFilters}
//         onFilterChange={handleFilterChange}
//       />
//       {loading ? (
//         <Loader />
//       ) : (
//         <CamperList campers={filteredCampers.slice(0, showMore)} />
//       )}
//       {showMore < filteredCampers.length && (
//         <button className={css.loadMoreBtn} onClick={loadMore}>
//           Load More
//         </button>
//       )}
//       {/* {loading ? <Loader /> : <CamperList campers={campers} />} */}
//     </section>
//   );
// }

// ===========================================================================================

import { useEffect, useState } from 'react';
import Filters from '../../components/Filters/Filters';
import Loader from '../../components/Loader/Loader';
import CamperList from '../../components/CamperList/CamperList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersSlice';
import css from './Catalog.module.css';
import { createSelector } from '@reduxjs/toolkit';

// Вибірка даних з редуксу з можливістю мемоізації
const selectCampers = state => state.campers?.items ?? [];
const selectMemoizedCampers = createSelector([selectCampers], campers => {
  // Трансформуємо дані перед поверненням, якщо потрібно
  return campers.map(camper => ({
    ...camper,
    // Наприклад, можна додати додаткові властивості чи фільтрацію
  }));
});

export default function Catalog() {
  const dispatch = useDispatch();
  const campers = useSelector(selectMemoizedCampers);
  const loading = useSelector(state => state.campers?.loading ?? false);
  const status = useSelector(state => state.campers?.status ?? 'idle');

  const [showMore, setShowMore] = useState(6);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCampers());
    }
  }, [dispatch, status]);

  const handleFilterChange = newFilters => {
    if (JSON.stringify(selectedFilters) !== JSON.stringify(newFilters)) {
      setSelectedFilters(newFilters);
    }
  };

  const filteredCampers = campers.filter(camper =>
    selectedFilters.every(filter => camper.features.includes(filter))
  );

  const loadMore = () => {
    setShowMore(prev => Math.min(prev + 6, filteredCampers.length));
  };

  return (
    <section className={css.catalog}>
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
    </section>
  );
}
