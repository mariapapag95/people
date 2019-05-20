import React, {Component} from 'react';
import Add from './Add'
import Reset from './Reset'
import NameList from './NameList';

class CreateList extends Component {
  state ={
    nameList: []
  }
  addName = (event) => {
    event.preventDefault()
    const furst = document.getElementById("first").value
    const lust = document.getElementById("last").value
    const nameList = this.state.nameList
    nameList.push(furst + " " + lust)
    this.setState({
      nameList: nameList
    })
  }

  reset = (event) => {
    event.preventDefault()
    this.setState({
      nameList: []
    })
  }

  render () {
    const allNames = this.state.nameList.map((element, i) => {
      return <NameList names={element} key={i} />
  })
    return (
      <div className="form">
          <Add clicked={this.addName}/>
          <Reset clicked={this.reset}/>
          <NameList names={this.state.names}/>
          {allNames}
          <div>
            
          </div>
      </div>
    );
  }
}

export default CreateList;
