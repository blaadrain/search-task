import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { UserType } from '../../types';

type SearchContextType = {
  users: UserType[];
  isLoading: boolean;
  setUsers: Dispatch<SetStateAction<UserType[]>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export const SearchContext = createContext<SearchContextType>({
  users: [],
  isLoading: false,
  setUsers: () => {},
  setIsLoading: () => {},
});

export const useSearchContext = () => useContext(SearchContext);
