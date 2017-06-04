import React from 'react';
import styles from './reactComp.css';


/*const App = (props) => (
  <div className='app'>
    <h2>Hello, webpack 123{props.val}</h2>
  </div>
);*/
// export default App;

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      val: props.val
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      val: Math.random()
    })
  }

  shouldComponentUpdate(...arg) {
    console.log(arg);
    return true;
  }

  render() {
    return (
      <div className='app' onClick={this.handleClick}>
        <h2>Hello, webpack {this.state.val}</h2>
      </div>
    )
  }
}

App.defaultProps = {
    val: 'xxxx'
};

export default App;