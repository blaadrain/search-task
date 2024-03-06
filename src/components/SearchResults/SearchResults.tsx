import { useSearchContext } from './SearchContext';
import { UserCard } from '../UserCard/UserCard';
import { UserType } from '../../types';

import './style.css';

export function SearchResults() {
  const { users, isLoading } = useSearchContext();

  if (isLoading) return <div className="usersList">Загрузка...</div>;
  if (users.length === 0) {
    return <div className="usersList">Ничего не найдено :(</div>;
  }

  return (
    <div className="usersList">
      {users.map((user: UserType) => (
        <UserCard
          key={user.id}
          {...user}
        />
      ))}
    </div>
  );
}
