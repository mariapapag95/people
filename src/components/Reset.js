import React from 'react';

function Reset(props) {
  return (
      <form>
        <button className="button" onClick={props.clicked}>Reset</button>
      </form>
  );
}

export default Reset;
