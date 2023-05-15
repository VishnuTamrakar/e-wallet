import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Send() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        
              <button
                onClick={handleShow}
                className="btn btn-red ba-add-balance-btn"
                to="/addbalance"
              >
                Send
                <i className="fa fa-arrow-right"></i>
              </button>
           

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Send Money</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>From</Form.Label>
                <Form.Control type="text" />
                <Form.Label>Amount</Form.Label>

                <Form.Control type="number" autoFocus />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>To</Form.Label>

                <Form.Control type="text" autoFocus />
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number" autoFocus />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Send;
