import { UserType } from '../types';

export const getUsers = async (query: string): Promise<UserType[]> => {
  try {
    const response = await fetch(
      `https://dummyjson.com/users/search?q=${query}`
    );
    const data = await response.json();

    return data.users;
  } catch (error) {
    throw new Error('Не удалось получить список пользователей.');
  }
};
