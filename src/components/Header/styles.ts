import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
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

  input {
    border-radius: 5px;
    width: 280px;
    height: 30px;
    color: #000;
    padding-left: 10px;
  }
`;
