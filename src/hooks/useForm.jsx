import { useContext, useState, useEffect } from 'react';
import { PatientsContext } from '../context/PatientsContext';
import { v4 as uuid } from 'uuid';
const useForm = () => {
  const initialState = {
    ownerName: '',
    email: '',
    petName: '',
    description: '',
    date: '',
  };
  const [error, setError] = useState('');
  const { stateContext, setStateContext } = useContext(PatientsContext);

  const handleValues = (e) => {
    const target = e.target;
    setStateContext((prev) => ({
      ...prev,
      values: { ...prev.values, [target.id]: target.value },
    }));
  };
  console.log(stateContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { date, description, email, petName, ownerName } =
      stateContext.values;

    let errors = {};
    if (
      !!date.trim() &&
      !!description.trim() &&
      !!email.trim() &&
      !!petName.trim() &&
      !!ownerName.trim()
    ) {
      setError('');
      setStateContext((prev) => ({ ...prev, values: initialState }));
      setStateContext((prev) => ({
        ...prev,
        patients: [...prev.patients, { ...stateContext.values, id: uuid() }],
      }));
    } else {
      if (!date.trim()) errors.date = 'La fecha de ingreso es requerida';
      if (!description.trim())
        errors.description = 'La descripción es requerida';
      if (!email.trim()) errors.email = 'El correo es requerido';
      if (!petName.trim())
        errors.petName = 'El nombre de la mascota es requerido';
      if (!ownerName.trim())
        errors.ownerName = 'El nombre del dueño es requerido';
      setError(errors);
    }
  };

  const deletePatient = (id) => {
    const newPatients = stateContext.patients.filter(
      (patient) => patient.id !== id
    );
    setStateContext((prev) => ({ ...prev, patients: newPatients }));
  };

  const updatePatient = (id) => {
    const patientToModified = stateContext.patients.find(
      (patient) => patient.id === id
    );
    setStateContext((prev) => ({
      ...prev,
      values: patientToModified,
      editMode: true,
      id,
    }));
  };

  const editPatient = (e, id) => {
    e.preventDefault();
    const newResults = stateContext.patients.map((patient) =>
      patient.id === id ? { ...stateContext.values, id } : patient
    );
    setStateContext((prev) => ({
      ...prev,
      patients: newResults,
      editMode: false,
    }));
    setStateContext((prev) => ({
      ...prev,
      values: initialState,
    }));
  };

  useEffect(() => {
    const getLocalStorage = () => {
      const patientsLS = JSON.parse(localStorage.getItem('patients')) || [];
      setStateContext((prev) => ({ ...prev, patients: patientsLS }));
    };
    getLocalStorage();
  }, [setStateContext]);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(stateContext.patients));
  }, [stateContext.patients]);

  return {
    error,
    handleValues,
    handleSubmit,
    deletePatient,
    updatePatient,
    editPatient,
  };
};

export default useForm;
