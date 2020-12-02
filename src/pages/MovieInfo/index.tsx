import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Movie } from '../Landing';
import api from '../../services/api';

import { Container, Banner } from './styles';

interface MovieParams {
  id: string;
}

const MovieInfo: React.FC = () => {
  const [movie, setMovie] = useState<Movie>();

  const params = useParams<MovieParams>();

  useEffect(() => {
    api
      .get(`/movie/${params.id}?api_key=0b4278fe0c2b8faca2c1d47d3bfd174a`)
      .then(({ data }) => {
        setMovie(data);
      });

    // getData();
  }, [params.id]);

  console.log(movie);

  return (
    <>
      <div>
        {movie ? (
          <Container>
            <h3>{movie?.title}</h3>
            <h4>{movie?.overview}</h4>
          </Container>
        ) : (
          <h3>Aguarde...</h3>
        )}
      </div>
    </>
  );
};

export default MovieInfo;
