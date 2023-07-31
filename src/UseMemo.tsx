import { useMemo, useState } from 'react';
import { styled } from 'styled-components';
import { initialItems } from './helpers/utils';
import Button from './helpers/Button';
const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [items, count]
  );
  //   const selectedItem = useMemo(
  //     () => items.find((item) => item.isSelected),
  //     [items]
  //   );

  return (
    <StyledMemo className="tutorial">
      <h2>USE MEMO</h2>
      <h2>Count: {count}</h2>
      <h2>Selected Item: {selectedItem?.id}</h2>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </StyledMemo>
  );
};

const StyledMemo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
`;
export default UseMemo;
