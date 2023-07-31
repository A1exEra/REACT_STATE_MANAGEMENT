import { faker } from '@faker-js/faker';

export const users = Array(1000)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: faker.person.fullName(),
  }));

// Fake function mocking an api
export const fetchUsers = async (search: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
};

export const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_999_998,
  };
});
export const shuffle = (arr: string[]) => {
  const shuffledNames = [...arr];
  for (let i = shuffledNames.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledNames[i], shuffledNames[randomIndex]] = [
      shuffledNames[randomIndex],
      shuffledNames[i],
    ];
  }
  return shuffledNames;
};
/*
import { styled } from 'styled-components';

import React from 'react';

const UseReducer = () => {
  return <div>UseReducer</div>;
};

const Styledreducer = styled.div``;
export default UseReducer;
*/
