import styled from 'styled-components';
import img from '../../images/gameplay.jpg';

const BackGround = styled.div`
  border: 1px solid #000;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export default BackGround