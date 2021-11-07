import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://freerangestock.com/photos/141161/perfect-blue-sky-background--with-fluffy-clouds.html" />
          <Card.Body>
            <Card.Title>High In The Sky!</Card.Title>
            <Card.Text>
              Here is my great text for this card. A pretty blue sky with big clouds!
    </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
  );
}
  }

export default App;
