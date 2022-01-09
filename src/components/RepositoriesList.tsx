import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useActions';

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypeSelector(
    (state) => state.repositories
  );

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    searchRepositories(term);
    setTerm('');
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
        <button>Search</button>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
      </form>
    </div>
  );
};

export default RepositoriesList;
