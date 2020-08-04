import React, { Component } from 'react'
import Title from './Title/Title'
import CountDown from './countDown/CountDown'
import Controller from './controller/Controller'
import Laps from './laps/Laps'


class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      time:{
        min:0,
        sec:0,
        mili:0
      },
      laps:[]
    }

  }

  getStarted(){
    this.intervalId = setInterval(() => {
      let min = this.state.time.min
      let sec = this.state.time.sec
      let mili = this.state.time.mili

      if(mili>9){
        mili = 0
        sec = sec + 1
        
      }
      if(sec>59){
        min = min + 1
        sec = 0
      }

      this.setState({
        ...this.state,
        time:{
          min,
          sec,
          mili: mili + 1
        }
      })
    },100)

  }

  getPause(){
    clearInterval(this.intervalId)
  }
  getLap(){
      let time = {
        ...this.state.time
      }
      this.setState({
        ...this.state,
        laps:[time,...this.state.laps]
      })
      
  }
  getReset(){
    this.setState({
      time:{
        min:0,
        sec:0,
        mili:0
      },
      laps: []
    })
  }
  render() {
   
    return (
      <div className="App">
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <Title />
              <CountDown time={ this.state.time } />
              <Controller 
              start = {this.getStarted.bind(this)}
              pause = {this.getPause.bind(this)}
              reset = {this.getReset.bind(this)}
              lap = {this.getLap.bind(this)}
              />
              <Laps className="my-4" laps={this.state.laps} />
            </div>
          </div>
          
        </div>
      </div>
      
    )
  }
}

export default App
