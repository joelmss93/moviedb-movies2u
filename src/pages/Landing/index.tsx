import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';

import { Container, Header, Movie, MovieInfo } from './styles';

export interface Movie {
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
  const [queryValue, setQueryValue] = useState('');
  const [page, setPage] = useState('1');
  const [isFocused, setIsFocused] = useState(false);

  const imgAPI = 'https://image.tmdb.org/t/p/w1280';

  useEffect(() => {
    getMovies();
  }, [page]);

  async function getMovies() {
    try {
      const response = await api.get(
        `/discover/movie?sort_by=popularity.desc&api_key=0b4278fe0c2b8faca2c1d47d3bfd174a&page=${page}`,
      );

      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleOnSubmit() {
    try {
      const response = await api.get(
        `/search/movie?&api_key=0b4278fe0c2b8faca2c1d47d3bfd174a&query=${queryValue}`,
      );

      setMovies(response.data.results);
    } catch (error) {
      return <div>Nothing found</div>;
    }
  }

  return (
    <>
      <Header>
        <Link to="/">
          <div>
            <img src={logoImg} alt="logo" />
          </div>
        </Link>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Buscar filmes"
            value={queryValue}
            onChange={async (e) => {
              setQueryValue(e.target.value);
              handleOnSubmit();
            }}
          />
        </form>
      </Header>
      <Container>
        {movies.length > 0 &&
          movies.map((movie) => {
            return (
              <Movie
                onFocus={() => {
                  setIsFocused(true);
                }}
                isFocused={isFocused}
                key={movie.id}
              >
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <img src={imgAPI + movie.poster_path} alt={movie.title} />
                  <div>
                    <h3>{movie.title}</h3>
                    <span>Rating: {movie.vote_average}</span>
                  </div>
                </Link>
              </Movie>
            );
          })}
      </Container>
    </>
  );
};

export default Landing;
