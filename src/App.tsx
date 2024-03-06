import { useEffect, useState } from 'react';
import { SearchForm } from './components/SearchForm/SearchForm';
import { SearchContext } from './components/SearchResults/SearchContext';
import { SearchResults } from './components/SearchResults/SearchResults';
import { UserType } from './types';
import { getUsers } from './actions/get-users';

export default function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);

        const data = await getUsers('');
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();

    return () => {}; // Отменить текущие запросы при анмаунте
  }, []);

  return (
    <SearchContext.Provider
      value={{ users, isLoading, setUsers, setIsLoading }}
    >
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}
