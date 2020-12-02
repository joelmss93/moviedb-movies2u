import React, { useCallback, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import TesteBanner from '../../assets/thor-ragnarok.jpg';
import MovieTeste from '../../assets/Avgstest.jpeg';

import api from '../../services/api';
import Header from '../../components/Header';

import { Container, Banner, Movie, Searcher } from './styles';

interface Movie {
  adult: boolean;
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
  id: string;
  poster_path: string;
}

const Landing: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const imgAPI = 'https://image.tmdb.org/t/p/w1280';

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await api.get(
          `/discover/movie?sort_by=popularity.desc&api_key=0b4278fe0c2b8faca2c1d47d3bfd174a&page=1`,
        );

        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, []);

  return (
    <>
      <Container>
        {movies.length > 0 &&
          movies.map((movie) => {
            console.log(movie);
            return (
              <Movie key={movie.id}>
                <a href="https://teste.com">
                  <img src={imgAPI + movie.poster_path} alt={movie.title} />
                  <div>
                    <h3>{movie.title}</h3>
                    <span>Rating: {movie.vote_average}</span>
                  </div>
                </a>
              </Movie>
            );
          })}
      </Container>
    </>
  );
};

export default Landing;

// return (
//   <>
//     <Header />
//     <Banner>
//       <img src={TesteBanner} alt="imgTeste" />
//       <div>
//         <h2>Titulo Aqui</h2>
//         <p>
//           heiuaheuiaeaea eaiehaiuehauiehauiea eajkopekapoekopakea
//           keoakeopakpeakopea eakoekaopea
//         </p>
//       </div>
//     </Banner>
//     <Container>
//       <Searcher placeholder="Buscar por filmes">
//         <FiSearch />
//         <input placeholder="Busque por filmes" />
//       </Searcher>
//     </Container>

//     <Movies>
//       <img src={MovieTeste} alt="teste" />
//     </Movies>
//   </>
// );
