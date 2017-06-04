import React from 'react';

class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(...arg) {
    console.log('nav', arg);
    return true;
  }

  render() {
    return (
      <div className='nav'>

      </div>
    )
  }
}

export default Nav;