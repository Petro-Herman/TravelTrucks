import FeaturesFilter from '../FeaturesFilter/FeaturesFilter';
import css from './Filters.module.css';

export default function Filters({ onFilterChange }) {
  return (
    <div className="filters">
      <div className={css.filterLocation}>
        <p className={css.location}>Location</p>
        <input
          type="text"
          placeholder="Kyiv, Ukraine"
          onChange={e => onFilterChange('location', e.target.value)}
        />
      </div>
      <div>
        <p>Filters</p>
        {/* <button onClick={() => onFilterChange('ac', true)}>AC</button> */}
        <FeaturesFilter />
        {/* <button onClick={() => onFilterChange('kitchen', true)}>Kitchen</button> */}
      </div>
    </div>
  );
}
