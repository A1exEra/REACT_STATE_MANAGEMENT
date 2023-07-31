import { styled } from 'styled-components';
import { useRef, useState } from 'react';
import InputRef from './InputRef';
import Button from '../helpers/Button';
const UseRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log('State:', count);
    console.log('Ref:', countRef.current);
  };
  //REFS DO NOT TRIGGER COMPONENT TO RERENDER!!!!!!
  return (
    <StyledRef>
      <h2>USE REF</h2>
      <h3>Count (useState): {count}</h3>
      <h3>Count (useRef): {countRef.current}</h3>
      <Button onClick={handleIncrement}>Increment</Button>
      <InputRef />
    </StyledRef>
  );
};
const StyledRef = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;
export default UseRef;
