import { styled } from 'styled-components';
import { useState } from 'react';
import { DashboardContext } from './context';
import Dashboard from './Dashboard';

export interface User {
  isSubscribed: boolean;
  name: string;
}

const UseContext = () => {
  const [user] = useState<User>({
    isSubscribed: true,
    name: 'God Of Code',
  });
  return (
    <StyledContext>
      <h2>USE CONTEXT</h2>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </StyledContext>
  );
};

const StyledContext = styled.div``;
export default UseContext;
