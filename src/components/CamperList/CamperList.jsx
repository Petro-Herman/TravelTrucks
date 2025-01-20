// import CamperCard from '../CamperCard/CamperCard';

// export default function CamperList({ campers }) {
//   return (
//     <div className="camper-list">
//       {campers.map(camper => (
//         <CamperCard key={camper.id} camper={camper} />
//       ))}
//     </div>
//   );
// }

export default function CamperList({ campers }) {
  const campersArray = campers.items || [];

  return (
    <ul>
      {campersArray.map(camp => (
        <li key={camp.id}>{camp.name}</li>
      ))}
    </ul>
  );
}
