import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import Button from '../helpers/Button';
const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // The code that we want to run
    console.log('The count is:', count);
    // Optional return function
    return () => {
      console.log('I am being cleaned up!');
    };
  }, [count]); // The dependency array

  return (
    <StyledEffects>
      <h2>USE EFFECT</h2>
      <h2>Count: {count}</h2>
      <div className="container">
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </div>
    </StyledEffects>
  );
};

const StyledEffects = styled.div`
  h2 {
    text-align: center;
  }
  width: 100%;
  .container {
    margin: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;
export default UseEffect;
