import React from 'react';

const InputElement = ({
  id,
  type,
  placeholder,
  labelText,
  action,
  value,
  err = '',
}) => {
  const nameClass = `border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md ${
    err && 'border-red-500'
  }`;

  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="block text-gray-700 uppercase font-bold before:content-['*']"
      >
        {labelText}
      </label>
      {err && <p className="text-red-500 text-xs italic">{err}</p>}
      <input
        onChange={action}
        id={id}
        type={type}
        placeholder={placeholder}
        className={nameClass}
        value={value}
      />
    </div>
  );
};

export default InputElement;
