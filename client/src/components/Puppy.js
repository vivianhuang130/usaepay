import React, { Component } from 'react'


class Puppy extends Component{

  render(){
        return (
          <div className="App">
            <div className="puppy">
              <img src={'http://www.guidedogsaustralia.com/images/state_6.jpg'} height="200" width="200" alt="puppy"/>
              <button>Purchase</button>
            </div>
          </div>
        )
      }
    }

export default Puppy
