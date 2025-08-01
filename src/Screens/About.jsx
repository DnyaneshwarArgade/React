import React from 'react'

export default function About() {

  const num = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      num.push(i);
    }
  }
  return (
    <div style={{padding : 10}}>
      <h4>This is Even Number.................</h4>
      {num.map((num, index) => {
        return <li key={index}>{num}</li>;
      })}
    </div>
  )
}
