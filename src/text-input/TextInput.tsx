import React from 'react';

interface TextInputProps {
  className: string
  id: string
  label: string
  name: string
}

const TextInput = ({
  className,
  id,
  label,
  name
}: TextInputProps) => {
  return (
    <div className={className}>
      <label style={{ display: 'block' }} htmlFor={name}>{label}</label>
      <input name={name} id={id}/>
    </div>
  );
};

export {
  TextInput
};