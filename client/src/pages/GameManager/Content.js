import styled from 'styled-components';
import img from '../../images/mapBackgroud.png';

const BackGround = styled.div`
  border: 1px solid #000;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-top: 50px;
  padding-bottom: 125px;
`;

export default BackGround