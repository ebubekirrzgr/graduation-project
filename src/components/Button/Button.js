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
`;
StyledButton.defaultProps = {
  theme: 'primary',
};

export default StyledButton;
