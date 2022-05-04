import { useEffect, useState } from 'react';

import callToApi from '../services/callToApi';
import Header from './Header';
import Form from './Form';
import SceneList from './SceneList';

function App() {
  //datos iniciales de la API:
  useEffect(() => {
    callToApi().then((data) => {
      console.log(data);
      setScenesData(data);
    });
  }, []);

  //variables de estado:
  const [scenesData, setScenesData] = useState([]);
  const [movieFilterData, setMovieFilterData] = useState('');
  const [yearFilterData, setYearFilterData] = useState('All');

  // datos de sceneData filtrados:
  const filteredScenesData = scenesData
    .filter((scene) => {
      return movieFilterData === ''
        ? true
        : scene.movie.toLowerCase().includes(movieFilterData.toLowerCase());
    })
    .filter((scene) => {
      return yearFilterData === 'All'
        ? true
        : scene.year === parseInt(yearFilterData);
    });

  // función para sacar los datos (year) que necesito para pintar el select de años (sin que se repitan):
  const getScenesYear = () => {
    const years = scenesData.map((item) => item.year);
    const uniqueYears = years.filter((item, index) => {
      return years.indexOf(item) === index;
    });
    return uniqueYears;
  };
  console.log(getScenesYear());

  //funciones manejadoras:
  const handleMovieFilter = (value) => {
    setMovieFilterData(value);
  };

  const handleYearFilter = (value) => {
    setYearFilterData(value);
  };

  return (
    <>
      <Header />
      <main className="main">
        <Form
          handleMovieFilter={handleMovieFilter}
          handleYearFilter={handleYearFilter}
          years={getScenesYear()}
        />
        <SceneList data={filteredScenesData} />
      </main>
    </>
  );
}

export default App;
