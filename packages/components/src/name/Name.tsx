import React from 'react';

interface NameProps {
  firstName: string
  lastName: string
}

const Name = ({
  firstName,
  lastName
}: NameProps) => {
  return (
    <div>Name: {firstName} {lastName}</div>
  );
};

export {
  Name
};