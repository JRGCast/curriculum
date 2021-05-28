import React from 'react';
import logo from '../logo.svg';


const Title = ({job}) => {
  return (
  <header>{`Currículo de ${job === 'dev' ? "desenvolvedor" : "advogado"}:`}
    <h4>Feito em react</h4>
  <img src={logo} className="App-logo" alt="logo" /></header>
  );
}
 
export default Title;
