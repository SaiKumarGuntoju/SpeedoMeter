import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="page-container">
        <div className="container">
          <h1 className="main-heading">SPEEDOMETER</h1>
          <img
            className="img"
            alt="Speedometer"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          />
          <h1 className="sub-heading">Speed is {count}mph</h1>
          <p className="description">Min Limit is 0mph,Max Limit is 200mph</p>
          <div>
            <button type="button" className="btn" onClick={this.onAccelerate}>
              Accelerate
            </button>

            <button type="button" className="btn2" onClick={this.onBrake}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
