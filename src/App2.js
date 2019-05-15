import React, { Component } from 'react';
import MyButton from './components/layout/Button';

class App extends Component {
  constructor(){
    super()
    this.state = {
      mystate: 'state dari app',
      myNum: 1
    }
  }

  increment = () => {
      this.setState({
          myNum:this.state.myNum + 1
      })
  }

 decrement = () => {
      this.setState({
          myNum:this.state.myNum - 1
          // if {myNum <=0}
          // this.state 
          // myNum
    
      })
  }

  render(){
      const {myNum} = this.state
      return  (
        <div>
        <div>
            {myNum}
        </div>
        <br/>
        <div>
        <MyButton myButton="Increment" changeMyNum={this.increment}/>
        </div>
        <br/>
        <MyButton myButton="Decrement" changeMyNum={this.decrement}/>
        </div>
      )
         
  }
}

  export default App;