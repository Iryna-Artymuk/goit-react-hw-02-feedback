import { Component } from 'react';
import Feedback from '../components/Feedback/Feedback';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addPoint = value => {
    const obj = {};

    this.setState(prevState => {
      for (const key of Object.keys(prevState)) {
        obj[key] = key === value ? prevState[key] + 1 : prevState[key];
      }

      return obj;
    });
  };
  render() {
    return (
      <Feedback
        addPoint={this.addPoint}
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
      />
    );
  }
}
export default App;
