import React from 'react'
import Card from './component/Card'
import Data from './data.json'



function App() {
  
  let items=[];
  
    items=Data.map((item) => <Card titleText={item.title} desText={item.desc} />);
  

  return (
          // <div>
          //     <h1 className="headingTitle">welcome world</h1>
          //     <Card titleText="Top heading" desText="Lorem Ipsum is dummy1"/>
          //     <Card titleText="Top Menu" desText="Lorem Ipsum is simply dummy2">
          //     <Card titleText="Top Body" desText="Lorem Ipsum is simply dummy3">
          // </div>
          <div>
              <h1 className="headingTitle">welcome world</h1>
              {items}
          </div>
  );
    
}

export default App;
