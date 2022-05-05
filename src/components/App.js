import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router-dom';

import callToApi from '../services/callToApi';
import ls from '../services/localStorage';
import Header from './Header';
import Form from './Form';
import SceneList from './SceneList';
import SceneDetail from './SceneDetail';
import NotFound from './NotFound';

import '../styles/App.scss';

function App() {
  //datos iniciales de la API guardados en LocalStorage:
  useEffect(() => {
    if (scenesData.length === 0) {
      callToApi().then((data) => {
        console.log(data);
        ls.set('scenes', data);
        setScenesData(data);
      });
    }
  }, []);

  //variables de estado:
  const [scenesData, setScenesData] = useState(ls.get('scenes', []));
  const [movieFilterData, setMovieFilterData] = useState('');
  const [yearFilterData, setYearFilterData] = useState('All');
  console.log(scenesData);

  // datos de sceneData filtrados:
  const filteredScenesData = scenesData
    .sort((a, b) => {
      if (a.movie < b.movie) {
        return -1;
      }
      if (a.movie > b.movie) {
        return 1;
      }
      return 0;
    })
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
    return uniqueYears.sort((a, b) => {
      return a - b;
    });
  };
  console.log(getScenesYear());

  //funciones manejadoras:
  const handleMovieFilter = (value) => {
    setMovieFilterData(value);
  };

  const handleYearFilter = (value) => {
    setYearFilterData(value);
  };

  //gestión de ruta y búsqueda de escena correspondiente
  const { pathname } = useLocation();
  const dataPath = matchPath('/scene/:id', pathname);
  const sceneId = dataPath !== null ? dataPath.params.id : null;
  const sceneFound = scenesData.find((item) => item.id === sceneId);
  const sceneNotFound = {};

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
                  movieFilterData={movieFilterData}
                  handleYearFilter={handleYearFilter}
                  years={getScenesYear()}
                />
                <SceneList data={filteredScenesData} />
              </>
            }
          />
          <Route
            path="/scene/:id"
            element={<SceneDetail scene={sceneFound || sceneNotFound} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
