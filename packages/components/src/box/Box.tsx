import React from 'react';

interface BoxProps {
  bg: string
  border: string
  children: JSX.Element
  m: string
  p: string
}

const Box = ({
  bg,
  border,
  children,
  m,
  p
}: BoxProps) => {
  return (
    <div style={{ background: bg, border, padding: p, margin: m }}>
      {children}
    </div>
  )
};

export {
  Box
};