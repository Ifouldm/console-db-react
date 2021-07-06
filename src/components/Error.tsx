import React from 'react';
import { Alert } from 'react-bootstrap';

const Error = ({message}: {message: string}) => <Alert variant="warning">{message}</Alert>;

export default Error;
