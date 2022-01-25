const TextAreaElement = ({ err, handleValues, description }) => {
  return (
    <>
      <label
        htmlFor="description"
        className="block text-gray-700 uppercase font-bold"
      >
        Síntomas
      </label>

      {err && <p className="text-red-500 text-xs italic">{err}</p>}
      <textarea
        name="description"
        id="description"
        placeholder="Le duele la patita..."
        className={`border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md ${
          err && 'border-red-500'
        }`}
        onChange={handleValues}
        value={description}
      ></textarea>
    </>
  );
};

export default TextAreaElement;
