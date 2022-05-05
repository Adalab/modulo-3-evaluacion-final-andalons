import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router-dom';

import callToApi from '../services/callToApi';
import Header from './Header';
import Form from './Form';
import SceneList from './SceneList';
import SceneDetail from './SceneDetail';

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

  //gestión de ruta
  const { pathname } = useLocation();
  const dataPath = matchPath('/scene/:id', pathname);
  console.log(dataPath);

  const sceneId = dataPath !== null ? dataPath.params.id : null;
  const sceneFound = scenesData.find((item) => item.id === sceneId);
  console.log(sceneFound);

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Form
                  handleMovieFilter={handleMovieFilter}
                  handleYearFilter={handleYearFilter}
                  years={getScenesYear()}
                />
                <SceneList data={filteredScenesData} />
              </>
            }
          />
          <Route
            path="/scene/:id"
            element={<SceneDetail scene={sceneFound} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
