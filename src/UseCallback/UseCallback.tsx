import { styled } from 'styled-components';
import { useCallback, useState } from 'react';
import { shuffle } from '../helpers/utils';
import Button from '../helpers/Button';
import Search from './Search';

const allUsers = ['john', 'alex', 'george', 'simon', 'james'];

const UseCallback = () => {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback(
    (text: string) => {
      console.log(users[0]);
      const filteredUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    [users]
  );

  return (
    <StyledCallback>
      <h2>USE CALLBACK</h2>
      <div className="container">
        <Button onClick={() => setUsers(shuffle(allUsers))}>{`Shuffle`}</Button>
        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>
            <h3>{user}</h3>
          </li>
        ))}
      </ul>
    </StyledCallback>
  );
};

const StyledCallback = styled.div`
  h2 {
    text-align: center;
  }
  ul {
    list-style: none;
    text-align: start;
  }
  .container {
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-bottom: 16px;
  }
  input {
    background: #213547;
    // height: 50px;
    min-width: 250px;
    border-radius: 8px;
    border: 1px solid #6a717f;
    font-size: 20px;
    height: 50px;
    padding: 8px 16px;
    color: #97a0b1;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  }
`;
export default UseCallback;
