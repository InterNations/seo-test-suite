import React from 'react';

import SetTimeoutTest from '../test/SetTimeoutTest';
import Suite from './Suite';

export default () => (
    <Suite name="Set Timeout">
        <SetTimeoutTest delay={3}>
            <a href="/seo-experiment-3/nyc4">New York City: The City That Never Sleeps - Part 4</a>
        </SetTimeoutTest>

        <SetTimeoutTest delay={6}>
            <a href="/seo-experiment-3/nyc5">New York City: The City That Never Sleeps - Part 5</a>
        </SetTimeoutTest>
    </Suite>
);
