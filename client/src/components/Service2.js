import React from 'react'

const Service2 = ({para, amount,header ,desc}) => {
  return (
    <div>
        <div  className='container'>
              <div className='card'>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <p>{para}</p>
                  <p>{amount}</p>
                </div>
                <h4 style={{ margin: "10px 0" }}>{header}</h4>
                <p>{desc}</p>
              </div>
            </div>
    </div>
  )
}

export default Service2