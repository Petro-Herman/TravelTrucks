import { useDispatch, useSelector } from 'react-redux';
import { toggleFeature } from '../../redux/filtersSlice';
import { featureOptions } from '../../constants/featureOptions';

export default function FeaturesFilter() {
  const dispatch = useDispatch();
  const selectedFeatures = useSelector(state => state.filters?.features || []);

  const handleChange = ({ target: { value } }) => {
    dispatch(toggleFeature(value));
  };

  return (
    <div>
      <h3>Features</h3>
      <ul>
        {featureOptions.map(feature => (
          <li key={feature}>
            <label>
              <input
                type="checkbox"
                value={feature}
                checked={selectedFeatures.includes(feature)}
                onChange={handleChange}
              />
              {feature}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
