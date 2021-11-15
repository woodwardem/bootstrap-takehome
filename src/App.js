import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./App.css";
import Form from 'react-bootstrap/Form';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="username" placeholder="username" />
            <Form.Text className="text-muted">
              We will take care of the private information you enter. 
    </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Personal Code</Form.Label>
            <Form.Control type="personal code" placeholder="code" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
  </Button>
        </Form>
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
