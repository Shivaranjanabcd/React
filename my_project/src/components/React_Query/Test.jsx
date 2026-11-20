import React from 'react'
import {useQuery} from '@tanstack/react-query'
export const Test = () => {
  const {isLoading, data, error} = useQuery({
    queryKey: ["user_defined_key"], 
    queryFn: Api_call
  });
  
  // OR without destructure also we can create
  const repo2 = useQuery({
    queryKey:["user_key"],
    queryFn: repo2_func
  })
        

  function Api_call(){
    return fetch("https://api.github.com/repos/shivaranjanabcd/profive").then((resp)=>resp.json())
  }

  if (isLoading){
    return <h1>Loading...</h1>

  }

  if (error){
    return <h1>Error</h1>
  }

  function repo2_func(){
    return fetch("https://api.github.com/repos/shivaranjanabcd/django_API").then((resp)=>resp.json())
  }

  if(isLoading || repo2.isLoading){
    return <h1>Loading...</h1>
  }

  if(error || repo2.error){
    return <h1>Error</h1>
  }

  
  return (
    <div>
      <h1>Repo Name: {data.name}</h1>
      <h2>Owner: {data.owner.login}</h2>
      <h2>Url: {data.html_url}</h2>
      <br />
      <h1>Repo Name: {repo2.data.name}</h1>
      <h2>Owner: {repo2.data.owner.login}</h2>
      <h2>Url: {repo2.data.html_url}</h2>
    </div>
  )
}
