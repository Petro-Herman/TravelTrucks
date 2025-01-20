import { Link } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {
  return (
    <section className={css.home}>
      <div className={css.overlay}>
        <div className={css.title}>
          <h1>Campers of your dreams</h1>
          <p>You can find everything you want in our catalog</p>
        </div>
        <Link to="/catalog">
          <button className={css.button}>View Now</button>
        </Link>
      </div>
    </section>
  );
}
