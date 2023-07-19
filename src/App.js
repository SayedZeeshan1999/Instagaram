import Logo from './components/Logo';
import Term from './components/Term';
import Input from './components/Input';
import Option from './components/Option';
import Fb from './components/Fb';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return <div>

      <div className='main'>
        <Logo />
        <Fb />
        <Option/>
        <Input/>
        <Term/>
      </div>
    </div>
  }
}

export default App;
