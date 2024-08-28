import React from 'react'
import Card from './component/Card'
import Data from './data.json'

function App() {
  
  return (
          
          <div>
              <h1 className="headingTitle">welcome world</h1>
              {Data.map((item,index) => <Card key={index} titleText={item.title} desText={item.desc} />)}
          </div>
  );
    
}

export default App;
