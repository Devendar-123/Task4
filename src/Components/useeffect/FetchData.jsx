


// import React, { useState, useEffect } from 'react';

// const FetchData = () => {
//   const [areas, setAreas] = useState([]); 
//   const [loading, setLoading] = useState(false); 
//   const [error, setError] = useState(null); 

//   // const apiKey = '64b9665a8f0a4dfdb38069708465d999'; 

//   useEffect(() => {
//     const fetchAreas = async () => {
//       setLoading(true); 
//       try {
//         const response = await fetch('https://api.football-data.org/v4/areas', {
//           headers: {
//             'X-Auth-Token': "64b9665a8f0a4dfdb38069708465d999",
//           },
//         });
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch areas');
//         }

//         const data = await response.json(); 
//         setAreas(data.areas); 
//       } catch (err) {
//         setError(err.message); 
//       } finally {
//         setLoading(false); 
//       }
//     };

//     fetchAreas(); 
//   }, []); 

//   return (
//     <div>
//       <h1>Football Areas</h1>

//       {loading && <p>Loading...</p>} 
//       {error && <p style={{ color: 'red' }}>{error}</p>} 

//       <h2>List of Areas</h2>
//       <ul>
//         {areas.length > 0 ? (
//           areas.map((area) => (
//             <li key={area.id}>{area.name}</li> 
//           ))
//         ) : (
//           <p>No areas available.</p> 
//         )}
//       </ul>
//     </div>
//   );
// };

// export default FetchData;


