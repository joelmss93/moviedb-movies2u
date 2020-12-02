import styled from 'styled-components';
import { shade } from 'polished';

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
  background: #253741;
  border-radius: 0 0 10px 10px;
  padding-bottom: 40px;

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
    width: 240px;
    height: 30px;
    color: #000;
    padding-left: 10px;
  }
`;

export const Movie = styled.div`
  background: #2c414e;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  position: relative;
  overflow: hidden;

  text-align: center;
  margin: 15px;
  border-radius: 10px;

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

// export const Banner = styled.div`
//   /* background: #2c414e; */
//   padding-top: 20px;
//   border-radius: 40px;
//   height: 500px;

//   display: flex;
//   flex-direction: row;
//   align-items: center;

//   color: #fff;

//   img {
//     width: 900px;
//     height: 450px;
//     border-radius: 20px;
//   }

//   div {
//     flex-direction: column;
//     margin: 20px;
//   }

//   h2 {
//     font-size: 32px;
//   }

//   p {
//     font-size: 20px;
//     margin-top: 15px;
//   }
// `;

// export const Searcher = styled.div`
//   margin-top: 20px;
//   background: #fff;
//   border-radius: 15px;
//   width: 1000px;
//   height: 50px;
//   color: #000;
//   margin-right: 15px;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);

//   svg {
//     width: 35px;
//     height: 35px;
//   }

//   input {
//     color: #000;
//     width: 900px;
//     height: 49px;
//     border: 0;
//     margin-left: 15px;
//   }
// `;
