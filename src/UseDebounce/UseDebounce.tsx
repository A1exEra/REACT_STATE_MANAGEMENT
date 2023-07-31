import { useEffect, useState } from 'react';
import { useDebounce } from '../helpers/hooks';
import SearchBar from '../helpers/SearchBar';
import { fetchUsers } from '../helpers/utils';
import { styled } from 'styled-components';

interface User {
  id: number;
  name: string;
}

const UseDebounce = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);

      const users = await fetchUsers(debouncedSearch);
      setUsers(users);

      setLoading(false);
    };
    loadUsers();
  }, [debouncedSearch]);

  return (
    <StyledDebounce>
      <h2>USE DEBOUNCE</h2>
      <SearchBar onChange={setSearch} />
      {loading && <div>Loading...</div>}
      {!loading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>{user.name}</p>
            </li>
          ))}
        </ul>
      )}
    </StyledDebounce>
  );
};

const StyledDebounce = styled.div`
  h2 {
    text-align: center;
  }
  ul {
    margin: 16px auto;
    list-style: none;
    text-align: start;
    max-height: 400px;
    border-radius: 8px;
    padding: 8px;
    overflow-y: auto;
    background: #213547;
    min-width: 250px;
    border: 1px solid #6a717f;
    color: #97a0b1;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
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
export default UseDebounce;
