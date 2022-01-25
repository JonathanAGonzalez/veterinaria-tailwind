import { useContext } from 'react';
import { PatientsContext } from '../context/PatientsContext';
import ItemPatientElement from './elements/ItemPatientElement';

const ListPatients = () => {
  const {
    stateContext: { patients },
    stateContext: { editMode },
  } = useContext(PatientsContext);

  return (
    <div className="md:w-1/2 lg:w-3/5 ">
      <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
      <p className="text-lg mt-5 mb-7 text-center">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">pacientes y Citas</span>
      </p>
      <div className="h-screen overflow-scroll">
        {patients &&
          patients.map((patient) => (
            <ItemPatientElement
              key={patient.id}
              {...patient}
              editMode={editMode}
            />
          ))}
      </div>
    </div>
  );
};

export default ListPatients;
