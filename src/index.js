import React from 'react';
import ReactDom from 'react-dom';

const Tutorial = () => {

    return (
      <div>
        <p>Hey there from the react application and is everything alright.</p>
        <Greet />
      </div>
    )

}


const Greet = () => {
  return(
    <div>This is from another functional component.</div>
  )
}

ReactDom.render(<Tutorial />, document.getElementById('root'));