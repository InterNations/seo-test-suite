import React from 'react';

import Suite from './Suite';
import ButtonTest from '../test/ButtonTest';
import AnchorTest from '../test/AnchorTest';
import DropdownTest from '../test/DropdownTest';

export default () => (
    <Suite name="Form Controls">
        <ButtonTest url="/seo-experiment-3/nyc4" />
        <DropdownTest
            options={[
                { url: '/seo-experiment-3/nyc5', text: 'New York City: The City That Never Sleeps - Part 5' },
            ]}
        />
    </Suite>
);
