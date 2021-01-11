import { useState, useRef, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { useContext } from 'react';
import useGoogleAddress from '../hooks/useGoogleAddress';

export default function SearchBar() {
  const [value, setValue] = useState('');
  const form = useRef(null);

  const { setLocation, search, setSearch } = useContext(AppContext);
  const location = useGoogleAddress(search);

  useEffect(() => {
    console.log(location);
    setLocation(location);
  }, [search]);

  const handleChange = event => {
    setValue(event.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const address = formData.get('search');

    console.log(location);
    setLocation(location);
    setSearch(address);
  };

  return (
    <>
      <form ref={form}>
        <label htmlFor="search">
          <input
            name="search"
            placeholder="Search"
            type="text"
            value={value}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit} type="submit">
          Search
        </button>
      </form>
    </>
  );
}
