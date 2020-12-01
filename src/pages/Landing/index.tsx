import React, { useCallback, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container, Banner, Movies, Searcher } from './styles';
import Header from '../../components/Header';
import api from '../../services/api';

import TesteBanner from '../../assets/thor-ragnarok.jpg';
import MovieTeste from '../../assets/Avgstest.jpeg';

const Landing: React.FC = () => {
  // const [movies, setMovies] = useState();

  return (
    <>
      <Header />
      <Banner>
        <img src={TesteBanner} alt="imgTeste" />
        <div>
          <h2>Titulo Aqui</h2>
          <p>
            heiuaheuiaeaea eaiehaiuehauiehauiea eajkopekapoekopakea
            keoakeopakpeakopea eakoekaopea
          </p>
        </div>
      </Banner>
      <Container>
        <Searcher placeholder="Buscar por filmes">
          <FiSearch />
          <input placeholder="Busque por filmes" />
        </Searcher>
      </Container>

      <Movies>
        <img src={MovieTeste} alt="teste" />
      </Movies>
    </>
  );
};

export default Landing;
