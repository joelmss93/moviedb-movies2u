import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Banner = styled.div`
  /* background: #2c414e; */
  padding-top: 20px;
  border-radius: 40px;
  height: 500px;

  display: flex;
  flex-direction: row;
  align-items: center;

  color: #fff;

  img {
    width: 900px;
    height: 450px;
    border-radius: 20px;
  }

  div {
    flex-direction: column;
    margin: 20px;
  }

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 20px;
    margin-top: 15px;
  }
`;

export const Searcher = styled.div`
  margin-top: 20px;
  background: #fff;
  border-radius: 15px;
  width: 1000px;
  height: 50px;
  color: #000;
  margin-right: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);

  svg {
    width: 35px;
    height: 35px;
  }

  input {
    color: #000;
    width: 900px;
    height: 49px;
    border: 0;
    margin-left: 15px;
  }
`;

export const Movies = styled.div`
  display: flex;
  padding-top: 50px;

  img {
    width: 270px;
    height: 380px;
    border-radius: 5px;
  }
`;