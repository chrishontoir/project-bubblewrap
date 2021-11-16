import React from 'react';

export const Context = React.createContext({
  auth: null,
  SetAuth: () => {}
});

export const useContext = () => React.useContext(Context);
