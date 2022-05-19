import React from 'react'

const Card = (props) => {
  let data = props.data
  console.log(data)
  return (
    <div>
      {
        data.map((item,i)=>(
          <div key={i} style={{textAlign:"left",width:"500px",margin:"auto",backgroundColor:`${item.color}`,padding:"10px",marginTop:"20px",border:"2px solid black"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <p><b>{item.date}</b></p>
              <img style={{width:"80px",borderRadius:"50px"}} src={item.logo} alt="" />
            </div>
            <div style={{width:"100px",padding:"10px",backgroundColor:"black",color:"white"}}>{item.heading}</div>
            <h1 style={{width:"200px"}}>{item.subheading}</h1>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <p><b>{item.Device}</b></p>
              <img style={{width:"80px",borderRadius:"10px"}} src="https://th.bing.com/th/id/OIP.SfbvY3SwmAIoZLxnaEjGOAHaGs?w=218&h=197&c=7&r=0&o=5&pid=1.7" alt="" />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Card