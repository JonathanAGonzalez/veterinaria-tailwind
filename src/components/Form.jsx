import { useContext } from 'react';
import { PatientsContext } from '../context/PatientsContext';
import useForm from '../hooks/useForm';
import InputElement from './elements/InputElement';
import TextAreaElement from './elements/TextAreaElement';

const Form = () => {
  const { error, handleValues, handleSubmit, editPatient } = useForm();
  const {
    stateContext: { values },
    stateContext: { editMode },
    stateContext,
  } = useContext(PatientsContext);

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-12">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {''}{' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={
          editMode
            ? (e) => editPatient(e, stateContext.id)
            : (e) => handleSubmit(e)
        }
        className="bg-white shadow-md rounded-lg py-10 px-5"
      >
        <InputElement
          labelText="Nombre de la mascota"
          id="petName"
          type="text"
          placeholder="Rocco..."
          action={handleValues}
          value={values.petName}
          err={error.petName}
        />
        <InputElement
          labelText="Nombre del propietario"
          id="ownerName"
          type="text"
          placeholder="Jonas Gonzáez..."
          action={handleValues}
          value={values.ownerName}
          err={error.ownerName}
        />
        <InputElement
          labelText="Correo electronico"
          id="email"
          type="email"
          placeholder="Jonas@msn.com"
          action={handleValues}
          value={values.email}
          err={error.email}
        />
        <InputElement
          labelText="Fecha de ingreso"
          id="date"
          type="date"
          action={handleValues}
          value={values.date}
          err={error.date}
        />
        <TextAreaElement
          err={error.description}
          handleValues={handleValues}
          description={values.description}
        />
        <input
          type="submit"
          value={editMode ? 'Editar' : 'Agregar'}
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md cursor-pointer hover:bg-indigo-900 transition"
        />
        {editMode && (
          <input
            type="submit"
            value="Cancelar edición"
            onClick={() => (stateContext.editMode = !editMode)}
            className="bg-red-600 w-full p-3 mt-2 text-white uppercase font-bold rounded-md cursor-pointer hover:bg-indigo-900 transition"
          />
        )}
      </form>
    </div>
  );
};

export default Form;
