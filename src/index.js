import React from 'react';
import ReactDom from 'react-dom';

const Tutorial = () => {

    return (
      <div>
        <p>Hey there from the react application.</p>
      </div>
    )

}


ReactDom.render(<Tutorial />, document.getElementById('root'));