import React from "react";
import "./App.css";

import {
  Container,
  Button,
  Alert,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "reactstrap";

class App extends React.Component {
  state = {
    visible: false,
    modalIsOpen: false
  };

  toggleAlert = () => {
    this.setState({ visible: !this.state.visible });
  };

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  render() {
    return (
      <Container className="App">
        <ListGroup>
          <ListGroupItem>
            <Button color="primary">Hello Button!</Button>
          </ListGroupItem>
          <ListGroupItem>
            <Button color="link">Hello Button!</Button>
          </ListGroupItem>
          <ListGroupItem>
            <Button color="info" block={true} onClick={this.toggleAlert}>
              Alert Button!
            </Button>
          </ListGroupItem>
          <ListGroupItem>
            <Button color="secondary" outline={true} onClick={this.toggleModal}>
              Modal
            </Button>
          </ListGroupItem>
        </ListGroup>

        <hr />

        <Alert
          color="primary"
          isOpen={this.state.visible}
          toggle={this.toggleAlert}
        >
          I'm an alert!
        </Alert>

        <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggleModal}>Modal Title</ModalHeader>
          <ModalBody>
            <p>
              Non esse minim esse commodo veniam sit commodo qui amet cillum. Ex
              do cillum anim duis irure exercitation. Commodo eiusmod incididunt
              pariatur labore duis eiusmod nostrud magna in nisi. Consequat
              excepteur quis exercitation occaecat qui do eiusmod aute commodo.
              Aute laborum velit quis occaecat consectetur voluptate. Irure
              labore irure mollit nulla. Magna pariatur labore excepteur Lorem
              labore mollit ad commodo cillum et commodo.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Sign Up</Button>
            <Button color="secondary" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default App;
