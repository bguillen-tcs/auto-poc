import React from 'react';

interface HeaderProps {
  level: 1 | 2
  text: string
}

const Header = ({
  level,
  text
}: HeaderProps) => {
  return (
    level === 1 ? <h1>{text}</h1> : <h2>{text}</h2>
  )
};

export {
  Header
};