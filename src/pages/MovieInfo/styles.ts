import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 60px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Banner = styled.div`
  width: 100%;
  max-width: 1200px;
  background: #34312d;
  border-radius: 30px;
  box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.25);

  display: flex;
  opacity: 0.9;

  img {
    width: 580px;
    /* object-fit: scale-down; */
    border-radius: 30px;
    box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.25);
  }

  div {
    display: flex;
    /* align-items: center;
    justify-content: center; */
    padding: 15px 15px 15px 15px;
    background: #34312d;

    > div {
      background: #d0d1cd;
      display: flex;
      flex-direction: column;
      width: 550px;
      height: 860px;
      border-radius: 30px;
      opacity: 0.7;

      > h1 {
        color: #000;
        font-size: 50px;
        padding-left: 20px;
        padding-top: 20px;

        text-shadow: 0px 30px 30px rgba(0, 0, 0, 0.25);
      }
      h2 {
        color: #000;
        font-size: 24px;
        padding: 20px 10px 0px 40px;
      }

      > p {
        color: #000;
        font-size: 18px;
        padding: 10px 10px 0px 60px;
      }
    }
  }
`;
