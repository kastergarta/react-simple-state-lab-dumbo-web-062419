import React from 'react';
import Matrix from './Matrix.js'

class Cell extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     color: '#FFF'
  //   }
  // }
  state = {
    color: this.props.value
  }
  //
  reColor = () => {
      const newColor = '#333'
      this.setState({
        color: newColor
      })
    }

  render(){
console.log(this.props.value)
    return(

      <div onClick={this.reColor} className="cell" style={{backgroundColor: this.state.color}}> </div>
    )
  }



}

export default Cell;
