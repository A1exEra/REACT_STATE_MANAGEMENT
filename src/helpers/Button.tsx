import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ButtonProps {
  onClick?: (props?: unknown) => void;
  children: ReactNode;
  className?: string;
}
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton onClick={props.onClick} className={`$props.ClassName`}>
      <p>{props.children}</p>
    </StyledButton>
  );
};
const StyledButton = styled.button`
  background: dodgerblue;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  transition: background-color 0.2s ease, transform 0.1s ease;
  color: #213547;
  &:hover {
    color: purple;
    transform: scale(1.05);
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
  }
  &:active {
    background-color: #646cff;
    border: none;
    color: whitesmoke;
    transform: scale(0.95);
  }
  &:focus,
  :focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
export default Button;
