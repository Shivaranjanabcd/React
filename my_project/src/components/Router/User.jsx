import React from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
  const {x} = useParams();
  return (
    <div>user:{x}</div>
  )
}
