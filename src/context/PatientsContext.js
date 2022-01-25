import { createContext, useState } from 'react';
const initialState = {
  ownerName: '',
  email: '',
  petName: '',
  description: '',
  date: '',
};
export const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {
  //const [patients, setPatients] = useState([]);
  const [stateContext, setStateContext] = useState({
    patients: [],
    values: initialState,
    editMode: false,
  });

  return (
    <PatientsContext.Provider value={{ stateContext, setStateContext }}>
      {children}
    </PatientsContext.Provider>
  );
};
