import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 50px;
  width: 100%;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h3 {
    color: #fff;
    font-weight: bold;
  }
`;
