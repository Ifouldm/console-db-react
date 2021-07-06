import React, { useState } from 'react';
import { Button, Modal, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { deleteConsoleById } from '../api';

const DeleteConsole = function deleteConsole() {
    const { id } = useParams<Record<string, string | undefined>>()
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    function requestDelete(deleteId: string) {
        deleteConsoleById(deleteId)
            .then(() => {
                // eslint-disable-next-line no-alert
                window.alert('Deleted');
                setShow(false);
            });
    }

    return (
        <Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Console</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{id}</p>
                    <p>Are you sure you want to delete this item?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" onClick={() => requestDelete(id || '')}>Delete Console</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default DeleteConsole;
