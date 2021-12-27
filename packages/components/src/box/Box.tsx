import React from 'react';

interface BoxProps {
  border: string
  children: JSX.Element
  m: string
  p: string
}

const Box = ({
  border,
  children,
  m,
  p
}: BoxProps) => {
  return (
    <div style={{ border, padding: p, margin: m }}>
      {children}
    </div>
  )
};

export {
  Box
};