import React from 'react';

class Pannel extends React.Component {

  constructor(props) {
    super(props);

  }

  shouldComponentUpdate(...arg) {
    console.log('panel', arg);
    return true;
  }

  render() {
    console.log(this);
    return (
      <div className='panel'>
          {this.props.children}
      </div>
    )
  }
}

export default Pannel;