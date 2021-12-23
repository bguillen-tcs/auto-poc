import React from 'react';

interface TextInputProps {
  id: string
  label: string
  name: string
}

/**
 * Text input component, which includes the label
 */
const TextInput = ({
  id,
  label,
  name
}: TextInputProps) => {
  return (
    <div>
      <label style={{ display: 'block' }} htmlFor={name}>{label}</label>
      <input name={name} id={id}/>
    </div>
  );
};

export {
  TextInput
};