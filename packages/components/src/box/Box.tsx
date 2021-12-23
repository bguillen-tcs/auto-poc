import React from 'react';

interface BoxProps {
  children: JSX.Element
}

const Box = ({
  children
}: BoxProps) => {
  return (
    <div>
      {children}
    </div>
  )
};

export {
  Box
};