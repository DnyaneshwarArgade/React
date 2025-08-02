import React from 'react'

export default function Contact() { 

  const oddnumber = [];

  for(let i = 1; i <= 50; i++)
  {
    if(i % 2 !== 0)
    {
      oddnumber.push(i);
    }
  }
  return (
    <div>
      <h4>This is Odd Number....</h4>
        <ul>
          {oddnumber.map((num, index) => (
            <li key={index}> {num} </li>
          ))}
        </ul>
    </div>
  )
}
