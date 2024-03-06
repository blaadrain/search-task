import { useSearchContext } from '../SearchResults/SearchContext';
import { getUsers } from '../../actions/get-users';
import { useDebouncedCallback } from 'use-debounce';

import './styles.css';

export function SearchForm() {
  const { setUsers } = useSearchContext();

  const handleSearch = useDebouncedCallback(async (searchQuery: string) => {
    try {
      const data = await getUsers(searchQuery);
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }, 300);

  return (
    <div className="searchForm">
      <form>
        <input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
    </div>
  );
}
