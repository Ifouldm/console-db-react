import React from 'react';
import { Container } from 'react-bootstrap';

import loadingImage from './loading.gif';

const Loading = () => (
    <Container>
        <img src={loadingImage} width="100" height="100" alt="loading" />
    </Container>
);

export default Loading;
