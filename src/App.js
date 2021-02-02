import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';
import { Container, Row, Col } from 'react-grid';
import Forms from "./Forms";
import Button from 'react-button-component';


class App extends React.Component{
  render(){
    return(
      <div className="App">
      <Container style={{width:"700px"}}>
       
          <Card>
      <CardHeader><h1>Darshak HR Chatbot</h1></CardHeader>
       <CardBody><Forms></Forms></CardBody>
     </Card>
         
      </Container>
     
      
      </div>
    )
  }
}

export default App;
