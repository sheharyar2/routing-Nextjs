import React from 'react'

const Docs = ({params}:{
  params:{slug:string[]}
}) => {
   if(params.slug?.length === 2 )
  {
    return (
      <div>
        
        <h1> viewing docs for feature {params.slug[0]} and concept {params.slug[1]}</h1></div>
    )
  }
  else if(params.slug?.length === 1)
  {
    return(
      <div>
        <h1>viewing docs for feature {params.slug[0]}</h1>
      </div>
    )
  }
  return(
    <div><h1>Document Page</h1></div>
  )
    
 
}

export default Docs