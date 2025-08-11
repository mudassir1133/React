// import React from 'react'
// import { useEffect, useState } from 'react';

// function Github() {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//          fetch('https://api.github.com/users/hiteshchoudhary')
//                 .then(response => response.json())
//                 .then(data => {
//                     console.log(data);
//                     setData(data);
//                 });
//         }, []);
//     return (
//         <div className=' text-center text-3xl font-bold bg-gray-600 m-4 p-4 w-3/4 mx-auto '>Github Followers: { data.followers}</div>
//   )
// }

// export default Github
import React, { useEffect, useState } from 'react';

function Github() {
  const [data, setData] = useState({}); // start as object

  useEffect(() => {
    fetch('https://api.github.com/users/mudassir1133')
      .then(response => response.json())
      .then(userData => {
        console.log(userData);
        setData(userData);
      })
      .catch(error => console.error("Error fetching GitHub data:", error));
  }, []);

  return (
    <div className='text-center text-3xl font-bold bg-gray-600 m-4  p-4 w-3/4 mx-auto'>
      Github Followers: {data.followers ?? "Loading..."}
      <img className='rounded-lg ml-70  justify-center items-center w-40 h-40' src={data.avatar_url} alt={data.login} />
    </div>
  );
}

export default Github;
