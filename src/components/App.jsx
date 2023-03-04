import { Component } from 'react';
import Feedback from '../components/Feedback/Feedback';
import Statistic from './Statistic/Statistic';
import Section from './Section/Section';
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
        obj[key] =
          key === value
            ? prevState[key] + 1
            : prevState[key];
      }
      return obj;
    });
  };

  getTotalFeedbackcount = () =>
    Object.values(this.state).some(element => element > 0);

  render() {
    this.getTotalFeedbackcount();
    return (
      <>
        <Section title=" Leave your feedback">
          <Feedback
            addPoint={this.addPoint}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        </Section>

        {this.getTotalFeedbackcount() && (
          <Section title="Statistics">
            <Statistic statisticData={this.state} />
          </Section>
        )}
      </>
    );
  }
}
export default App;
