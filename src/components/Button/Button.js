import styled from 'styled-components';

const theme = {
  primary: {
    bgcolor: '#4B9CE2',
    font: '#F0F8FF',
  },
  secondary: {
    bgcolor: '#F0F8FF',
    font: '#4B9CE2',
  },
  warning: {
    bgcolor: '#FFF0E2',
    font: '#FAAD60',
  },
  reject: {
    bgcolor: '#F77474',
    font: '#F0F8FF',
  },
  offer: {
    bgcolor: '#F2F2F2',
    font: '#B1B1B1',
  },
};

const size = {
  small: {
    fontSize: '12px',
  },
  medium: {
    fontSize: '15px',
  },
  large: {
    fontSize: '18px',
  },
};

const StyledButton = styled.button`
  background-color: ${(props) => theme[props.theme].bgcolor};
  color: ${(props) => theme[props.theme].font};
  font-size: ${(props) => size[props.size].fontSize};
  cursor: pointer;
`;
StyledButton.defaultProps = {
  theme: 'primary',
};

export default StyledButton;
