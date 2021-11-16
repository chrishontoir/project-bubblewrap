import styled from 'styled-components';

import { BACKGROUND_IMG } from '../images';

export const StyledPage = styled.div`
  background-image: url(${BACKGROUND_IMG});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;
