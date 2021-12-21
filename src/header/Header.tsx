import React from 'react';

interface HeaderProps {
  text: string
}

const Header = ({
  text
}: HeaderProps) => {
  return (
    <h1>{text}</h1>
  )
};

export {
  Header
};