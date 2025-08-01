import React from 'react'

function Gallery() {

  const evennum = [];
  const oddnum = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      // document.write("Number is Even : " + i);
      evennum.push(i);
    }
    else {
      // document.write("Number is Odd : " + i);
      oddnum.push(i);
    }
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-6'>
          <h3 className='text-success mt-4 mb-3 '>Odd Number...................</h3>
          <ul>
            {evennum.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>

        </div>

        <div className='col-6'>
          <h3 className='text-success mt-4 mb-3 '>Number is odd</h3>
          <ul>
            {oddnum.map((oddnumber, index) => (
              <li key={index}> {oddnumber} </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Gallery
