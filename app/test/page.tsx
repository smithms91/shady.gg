'use client';

import React from 'react'

type Props = {}

const Test = (props: Props) => {
  return (
    <div>
      <button onClick={() => console.log('test')}>Test</button>
    </div>
  )
}

export default Test