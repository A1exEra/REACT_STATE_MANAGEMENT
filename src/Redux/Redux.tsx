import { styled } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  addOne,
  subOne,
  addSome,
  subSome,
  reset,
} from '../store/slices/count.slice';
import Button from '../helpers/Button';
type T = { [key: string]: { count: number | string } };
const Redux = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: T) => state.counter.count);
  return (
    <StyledRedux>
      <h2>REACT REDUX</h2>
      <h2>Count is: {count}</h2>

      <div className="container">
        <Button onClick={() => dispatch(addOne())}>Add 1</Button>

        <Button onClick={() => dispatch(subOne())}>Decrease 1</Button>

        <Button onClick={() => dispatch(addSome(10))}>Add 10</Button>
        <Button onClick={() => dispatch(subSome(10))}>Decrease 10</Button>

        <Button onClick={() => dispatch(reset())}>Reset count</Button>
      </div>
    </StyledRedux>
  );
};

const StyledRedux = styled.div`
  h2 {
    text-align: center;
  }
  width: 100%;
  .container {
    margin: 16px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
`;
export default Redux;
