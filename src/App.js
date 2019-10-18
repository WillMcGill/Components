import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card_w_Image_BS from './Card_w_Image_BS.js';


class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Card_w_Image_BS title="will" description="desc" img="img" foot="foot"/>
    </div>
  );
}
}

export default App;
