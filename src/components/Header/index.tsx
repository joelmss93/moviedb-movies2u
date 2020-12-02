import React, { useCallback } from 'react';
import api from '../../services/api';

import { Container } from './styles';

const Header: React.FC = () => {
  const searchAPI =
    'https://api.themoviedb.org/3/search/movie?&api_key=0b4278fe0c2b8faca2c1d47d3bfd174a&query=';
  const queryValue = '';

  // eslint-disable-next-line consistent-return
  const handleOnSubmit = useCallback(async () => {
    try {
      const movie = await api.get(
        `/search/movie?&api_key=0b4278fe0c2b8faca2c1d47d3bfd174a&query=${queryValue}`,
      );

      console.log(movie);
    } catch (error) {
      return <div>Nothing found</div>;
    }
  }, []);

  return (
    <Container>
      <div>
        <h3>Movies2U</h3>
      </div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="Buscar filmes" />
      </form>
    </Container>
  );
};

export default Header;
