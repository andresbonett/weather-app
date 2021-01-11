import { useState } from 'react';

export const useInitialState = () => {
  const [state, setState] = useState({
    location: { lng: 74.796387, lat: 10.963889 },
    isLoading: true,
    isError: false,
  });
  const [data, setData] = useState({});
  const [search, setSearch] = useState('Bogota');
  const setLocation = location => {
    setState({
      ...state,
      location: { ...location },
    });
  };

  return {
    setLocation,
    setData,
    setSearch,
    search,
    state,
    data,
  };
};
