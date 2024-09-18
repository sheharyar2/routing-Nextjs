import React from 'react'

const Review = ({params}:{
    params:{
        reviewsId:string,
        productId:string
    }
}) => {
  return (
    <div><h1>
       Review {params.reviewsId} for Product {params.productId}</h1></div>
  )
}

export default Review