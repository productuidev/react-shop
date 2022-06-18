import { useState, useCallback } from "react";
import AppStateContext from "../contexts/AppStateContext";

const AppStateProvider = ({children}) => {
  const [prototypes, setPrototypes] = useState(); 
  const [orders, setOrders] = useState([]);
  const addToOrder = useCallback((id)=>{}, []);
  const remove = useCallback((id)=>{}, []);
  const removeAll = useCallback(()=>{}, []);

  return (
    <AppStateContext.AppStateProvider
      value={{
        prototypes,
        orders,
        addToOrder,
        remove,
        removeAll,
      }}
    >
      {children}
    </AppStateContext.AppStateProvider>
  );
}

export default AppStateProvider;

