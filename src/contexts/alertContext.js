import React, {createContext, useState} from 'react';

const AlertContext = createContext({
  isClosed: null,
  setIsClosed: () => {}
})

const AlertProvider = ({children}) => {
  const [isClosed, setIsClosed] = useState(false)

  const contextValue = {
    isClosed,
    setIsClosed
  }
  return (
    <AlertContext.Provider value={contextValue}>
      {children}
    </AlertContext.Provider>
  );
};

export {AlertProvider}

export default AlertContext;