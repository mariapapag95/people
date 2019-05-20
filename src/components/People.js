import React from 'react';
import CreateList from './CreateList'
import NameList from './NameList'


function People(props) {
  return (
    <div><h1>Enter your name here</h1>
      <form>
        <input className="input" id="first" placeholder="First Name"/>
        <input className="input" id="last" placeholder="Last Name"/>
      </form>
      <CreateList/>
      <NameList/>
    </div>
  );
}

export default People;
