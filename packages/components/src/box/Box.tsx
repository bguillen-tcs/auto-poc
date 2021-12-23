import React from 'react';

interface BoxProps {
  children: JSX.Element
  m: string
  p: string
}

const Box = ({
  children,
  m,
  p
}: BoxProps) => {
  return (
    <div style={{ padding: p, margin: m }}>
      {children}
    </div>
  )
};

export {
  Box
};