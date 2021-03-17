// dependancies
import React, {useEffect, useState} from 'react';
import { Button } from './components/Button';
import { Error } from './components/Error';
import { getRandNum } from './components/getRandNum';

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${getRandNum(1, 150)}/`)
    .then((response => {
      console.log(response);
      return response.json();
    }))
    .then((data) => setData(data));
  };

  if (data.error) return <Error />;

  return (
    <div>
      <h1>hey!</h1>
      <Button fetchData={fetchData} />
      <p>{data && data.name}</p>
    </div>
  );
};

export default App;