import { Button } from '../Button';
import styles from './Search.module.scss';
import {ReactComponent as SearchIcon} from '../../assets/icon-search.svg'

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void,
}

type FormFields = {
  userName: HTMLInputElement,
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();
    const text = e.currentTarget.userName.value;
    if(text.trim()) {
      onSubmit(text);
      e.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className={styles.search}>
        <label htmlFor='search' className={styles.label}>
          <SearchIcon/>
        </label>
        <input type='text'
              className={styles.textField}
              id='search'
              name={'userName'}
              placeholder='Search GitHub username...'
        />
        {hasError && (
          <div className={styles.error}>
            No result
          </div>
        )}
      <Button>Search</Button>
      </div>
    </form>
  )
};
