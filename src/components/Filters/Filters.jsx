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
      <button onClick={() => onFilterChange('ac', true)}>AC</button>
      <button onClick={() => onFilterChange('kitchen', true)}>Kitchen</button>
    </div>
  );
}
