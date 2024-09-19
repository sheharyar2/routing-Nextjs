import React from 'react'
import NotFound from './not-found'

const Review = ({params}:{
    params:{
        reviewsId:string,
        productId:string
    }
}) => {
  return (
    <>
    { parseInt(params.reviewsId) > 1000 ? <NotFound />:
        <div><h1>
       Review {params.reviewsId} for Product {params.productId}</h1></div>
    }
    </>
    
    
  )
}

export default Review