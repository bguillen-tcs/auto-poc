import React from 'react';

interface BoxProps {
  children: JSX.Element
  p: string
}

const Box = ({
  children,
  p
}: BoxProps) => {
  return (
    <div style={{ padding: p }}>
      {children}
    </div>
  )
};

export {
  Box
};