import React from 'react';

import Suite from './Suite';
import JSONLDTest from '../test/JSONLDTest';

export default () => (
    <Suite name="JSONLDTest">
        <JSONLDTest name="events" />
        <JSONLDTest name="forum" />
    </Suite>
);
