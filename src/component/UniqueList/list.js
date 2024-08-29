import React from 'react'
import { v4 as uuidv4 } from 'uuid';


const Todos =[
    {
        id:uuidv4(),
        title :"todo1",
        des :"todo des1",
    },
    {
        id:uuidv4(),
        title :"todo2",
        des :"todo des2",
    },
    {
        id:uuidv4(),
        title :"todo3",
        des :"todo des3",
    },
];

const list = () => {
  return (
    <div>
        {Todos.map((todo) => {
            const {id, title, des} = todo;
            return (
                <div key={id}>   
                    <h1>{title}</h1>
                    <h2>{des}</h2>
                </div>
            );
        })}
    </div>
  )
}

export default list