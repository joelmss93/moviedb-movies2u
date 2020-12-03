import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface MovieProps {
  isFocused: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  padding: 20px;
`;

export const Header = styled.div`
  height: 50px;
  width: 100%;
  padding: 20px;

  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #242321;
  border-radius: 0 0 10px 10px;
  padding-bottom: 40px;
  box-shadow: 30px 30px 30px 30px rgba(0, 0, 0, 0.25);

  img {
    width: 130px;
    margin-top: -40px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  h3 {
    color: #fff;
    font-weight: bold;
  }

  form {
    padding-bottom: 20px;
  }

  input {
    border-radius: 5px;
    margin-top: -20px;
    width: 200px;
    height: 30px;
    color: #000;
    padding-left: 10px;
    border: 0;
    background: #d3dade;
  }
`;

export const Movie = styled.div<MovieProps>`
  background: #34312d;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  position: relative;
  overflow: hidden;

  text-align: center;
  margin: 15px;
  border-radius: 10px;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #5197e1;
    `}

  a {
    text-decoration: none;
    color: #fff;
    transition: transform 0.2s;
  }

  &:hover {
    transform: translateY(-20px);
  }

  div {
    max-width: 250px;
    height: 110px;

    display: flex;
    flex-direction: column;
  }

  h3 {
    padding-top: 10px;
    font-size: 22px;
  }

  span {
    padding-top: 10px;
    font-weight: bold;
    font-size: 16px;
  }

  img {
    width: 270px;
    border-radius: 10px;
  }
`;

export const MovieInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #0f161a;
  color: #fff;
  width: 290px;
`;
