import useForm from '../../hooks/useForm';

const ItemPatientElement = ({
  date,
  description,
  email,
  ownerName,
  petName,
  id,
  editMode,
}) => {
  const { updatePatient, deletePatient, editPatient } = useForm();

  return (
    <div className="bg-white m-3 px-5 py-10 shadow-md rounded-lg">
      <ItemPatient textLabel="Nombre de la mascota" text={petName} />
      <ItemPatient textLabel="Nombre del propietario" text={ownerName} />
      <ItemPatient textLabel="Correo Electronico" text={email} />
      <ItemPatient textLabel="Fecha de ingreso" text={date} />
      <ItemPatient textLabel="Sintomas" text={description} />
      <div>
        <button
          onClick={
            editMode ? (e) => editPatient(e, id) : () => updatePatient(id)
          }
          className="py-2 px-5 rounded-lg mb-4 bg-indigo-600 text-white mr-2 transition hover:bg-indigo-900"
        >
          Editar
        </button>
        <button
          onClick={() => deletePatient(id)}
          className="py-2 px-5 rounded-lg mb-4 bg-red-700 text-white transition hover:bg-red-900"
        >
          Borrar
        </button>
      </div>
    </div>
  );
};

const ItemPatient = ({ text, textLabel }) => {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">
      {textLabel}: {''}
      <span className="font-normal normal-case">{text}</span>
    </p>
  );
};

export default ItemPatientElement;
