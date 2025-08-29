import React, { createContext, useContext, useState } from 'react';

const DeliveryMethodContext = createContext();

export const DeliveryMethodProvider = ({ children }) => {
  const [method, setMethod] = useState('delivery'); // default to delivery
  return (
    <DeliveryMethodContext.Provider value={{ method, setMethod }}>
      {children}
    </DeliveryMethodContext.Provider>
  );
};

export const useDeliveryMethod = () => useContext(DeliveryMethodContext);
