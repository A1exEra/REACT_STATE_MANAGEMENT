import { styled } from 'styled-components';
import { useRef, useEffect } from 'react';
const InputRef = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus(); //this focus automatically focuses on the input on component load!
  }, []);

  return (
    <StyledInput ref={inputRef} type="text" placeholder="Type something..." />
  );
};

const StyledInput = styled.input`
  background: #213547;
  min-width: 250px;
  border-radius: 8px;
  border: 1px solid #6a717f;
  font-size: 20px;
  height: 50px;
  padding: 8px 16px;
  color: #97a0b1;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
`;
export default InputRef;
