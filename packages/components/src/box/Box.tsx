import React from 'react';

interface BoxProps {
  bg: string
  border: string
  children: JSX.Element
  d: string
  m: string
  p: string
}

const Box = ({
  bg,
  border,
  children,
  d,
  m,
  p
}: BoxProps) => {
  return (
    <div style={{ background: bg, border, display: d, padding: p, margin: m }}>
      {children}
    </div>
  )
};

export {
  Box
};