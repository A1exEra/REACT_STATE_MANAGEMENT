import { styled } from 'styled-components';
import { useReducer } from 'react';
import Button from '../helpers/Button';

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: 'increment' | 'decrement';
}

function reducer(state: State, action: Action) {
  const { type } = action;

  switch (type) {
    case 'increment': {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'Maximum reached' : null,
      };
    }
    case 'decrement': {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'Minimum reached' : null,
      };
    }
    default:
      return state;
  }
}
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });
  return (
    <StyledReducer>
      <h2>USE REDUCER</h2>
      <h3>Count: {state.count}</h3>
      {state.error && (
        <div className="error">
          <h3>{state.error}</h3>
        </div>
      )}
      <div className="container">
        <Button onClick={() => dispatch({ type: 'decrement' })}>
          Decrement
        </Button>
        <Button
          className="mb-2"
          onClick={() => dispatch({ type: 'increment' })}>
          Increment
        </Button>
      </div>
    </StyledReducer>
  );
};

const StyledReducer = styled.div`
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
  .error {
    color: #d92828;
  }
`;
export default UseReducer;
