import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// import { Movie } from '../Landing';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import { Container, Banner, Content } from './styles';
import { Header } from '../Landing/styles';

interface Movie {
  id: string;
  poster_path: string;
  adult: false;
  release_date: string;
  original_title: string;
  overview: string;
  vote_average: number;
  title: string;
  certification: string;
  original_language: string;
  production_companies: Companies[];
  budget: string;
  genres: Genre[];
}

type Companies = {
  id: number;
  name: string;
  logo_path: string;
};

type Genre = {
  id: number;
  name: string;
};
interface MovieParams {
  id: string;
}

const MovieInfo: React.FC = () => {
  const [movie, setMovie] = useState<Movie>();

  const imgAPI = 'https://image.tmdb.org/t/p/w1280';
  const params = useParams<MovieParams>();

  useEffect(() => {
    api
      .get(`/movie/${params.id}?api_key=0b4278fe0c2b8faca2c1d47d3bfd174a`)
      .then(({ data }) => {
        setMovie(data);
      });
  }, [params.id]);

  console.log(movie);

  return (
    <>
      <Header>
        <Link to="/">
          <div>
            <img src={logoImg} alt="logo" />
          </div>
        </Link>
        <form onSubmit={() => {}}>
          <input type="text" placeholder="Buscar filmes" disabled />
        </form>
      </Header>
      <Container>
        {movie ? (
          <Content>
            <Banner>
              <img src={imgAPI + movie?.poster_path} alt="" />
              <div>
                <div>
                  <h1>{movie?.title}</h1>

                  <h2>Overview:</h2>
                  <p>{movie?.overview}</p>

                  <h2>Ratting:</h2>
                  <p>{movie?.vote_average}</p>

                  <h2>Release Date:</h2>
                  <p>{movie?.release_date}</p>

                  <h2>Production Companies:</h2>
                  {movie.production_companies.length > 0 &&
                    movie.production_companies.map((companie) => {
                      return <p>{companie.name}</p>;
                    })}
                </div>
              </div>
            </Banner>
          </Content>
        ) : (
          <h3>Aguarde...</h3>
        )}
      </Container>
    </>
  );
};

export default MovieInfo;
