import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.initialState = {
      counter:0,
      array:'',
      option:'sum',
      submitted: false,
      result: 0
    }
    this.state = this.initialState
  }

  handleTextChange = (event) => {
    this.setState({
      array: event.target.value.split(',')
    })
  }

  handleSelectChange = (event) => {
    this.setState({
      option: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.option === 'sum') {
      let result = this.state.array.reduce((acc,curr) => parseInt(acc) + parseInt(curr))
      this.setState({
        result: result,
        submitted: true
      })
    } else if (this.state.option === 'avg') {
      let result = (this.state.array.reduce((acc,curr) => parseInt(acc) + parseInt(curr))) / this.state.array.length
      this.setState({
        result: result,
        submitted: true
      })
    } else if (this.state.option === 'mode') {
      let result = mode(this.state.array)
      this.setState({
        result: result,
        submitted: true
      })
    }
  }

  handleRestart = () => {
    this.setState(this.initialState)
  }

  render() {
    if (this.state.submitted) {
      return (
        <div className="App">
          <h2>Enter each number in the array, separated by a ','</h2>
          <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleTextChange} type='text'></input>
          <select onChange={this.handleSelectChange}>
            <option value='sum'>sum</option>
            <option value='avg'>average</option>
            <option value='mode'>mode</option>
          </select>
          <button>calculate</button>
          </form>
          <h1>{this.state.result}</h1>
          <button onClick={this.handleRestart}>restart</button>
        </div>
      )
    } else {
      return (
        <div className="App">
          <h2>Enter each number in the array, separated by a ','</h2>
          <form onSubmit={this.handleSubmit}>
          <input value={this.state.array} onChange={this.handleTextChange} type='text'></input>
          <select value={this.state.option} onChange={this.handleSelectChange}>
            <option value='sum'>sum</option>
            <option value='avg'>average</option>
            <option value='mode'>mode</option>
          </select>
          <button>calculate</button>
          </form>
        </div>
      )
    }
  }
}

function mode(arr) {
  let mode = 0

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < i; j++) {
       if(arr[j] === arr[i]) {
         mode = arr[j]
       }
    }
  }
  return mode
}

export default App;
