import React from 'react'
import Service2 from '../components/Service2'

const data = [
  {
    para: "Data Inshights LLc",
    amount: " $1.200 - $6.00",
    header: "Data Analysis",
    desc: "Analyzing data to gain insights and make informed decisions."
  },
  {
    para: "DSA",
    amount: " $1.200 - $6.00",
    header: "Data Structure & Algorithm",
    desc: "Analyzing data to gain insights and make informed decisions."
  },
  {
    para: "Android Development",
    amount: " $1.200 - $6.00",
    header: "Android Development",
    desc: "Analyzing data to gain insights and make informed decisions."
  },
  {
    para: "Data Inshights LLc",
    amount: " $1.200 - $6.00",
    header: "Data Analysis",
    desc: "Analyzing data to gain insights and make informed decisions."
  },
  {
    para: "DSA",
    amount: " $1.200 - $6.00",
    header: "Data Structure & Algorithm",
    desc: "Analyzing data to gain insights and make informed decisions."
  },

]

const Service = () => {
     return (
    <div className='flex'>
      {
        data.map((x,index) => {
          return (
            <Service2 key={index} para={x.para} amount={x.amount} header={x.header} desc={x.desc}/>
          )
        })
      }
    </div>
  )
}

export default Service