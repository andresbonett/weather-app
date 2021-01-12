import { createContext, useState } from 'react';

const initialState = { lat: 10.39, lng: -75.48 };

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [location, setLocation] = useState(initialState);
  const [data, setData] = useState({});
  const [isLoading, SetIsLoading] = useState(true);

  return (
    <AppContext.Provider
      value={{ location, setLocation, data, setData, isLoading, SetIsLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
