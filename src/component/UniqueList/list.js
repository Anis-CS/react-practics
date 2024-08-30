import React from 'react'
import { v4 as uuidv4 } from 'uuid';


const Todos=[
    {
        id:uuidv4(),
        title:"call home",
        des:"This is a description 1"
    },
    {
        id:uuidv4(),
        title:"call father",
        des:"This is a description 2"
    },
    {
        id:uuidv4(),
        title:"call Mother",
        des:"This is a description 3"
    }
];


const list = () => {
  return (
    <div>
         {Todos.map((todo) =>{
            const {id, title, des}=todo;
            return (
                <div className='card' key={id}>
                    <h1 className='cardTitle'>{title}</h1>
                    <p className='cardDes'>{des}</p>
                </div>
            )
            })};   
    </div>
  )
}

export default list