'use client';

import MovingComponent from 'react-moving-text';

export default function Heading() {
  return '$TOPPY'.split('').map((letter, index) => (
    <MovingComponent
      key={index}
      type='swing'
      duration='1600ms'
      delay={`${index * 100}ms`}
      direction='normal'
      timing='ease-in-out'
      iteration='infinite'
      fillMode='none'
    >
      {letter}
    </MovingComponent>
  ));
}
