import React, { useState } from 'react';
import './Article.css';
import axios from 'axios'

function Article() {
  const [state,setState] = useState([])
  return (
    <div className='content'>
        <h1 className='title'>Articles</h1>
        <button className='button' onClick={()=>{
            axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
                console.log(response.data)
                setState(response.data)
            })
        }}>GET DATA</button>

        <div className="row">
            <div className="posters">
                {state.map((obj,index)=>{
                    return(
                        <div className="poster">
                            <h3>NO : {index+1}</h3>
                            <h3>UserID : {obj.id}</h3>
                            <h3>Title : {obj.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Article
