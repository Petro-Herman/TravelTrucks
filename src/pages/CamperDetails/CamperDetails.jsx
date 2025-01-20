import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import API_URL from '../../Back-end/back';

export default function CamperDetails() {
  const { id } = useParams();
  const { camper, setCamper } = useState(null);
  const { loading, setLoading } = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}/${id}`).then(response => {
      setCamper(response.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loader />;
  if (!camper) return <p>Camper not found</p>;

  return (
    <section>
      <h2>{camper.name}</h2>
      <img src={camper.image} alt={camper.name} />
      <p>Price: {camper.price.toFixed(2)}$</p>
      <p>{camper.description}</p>
    </section>
  );
}
