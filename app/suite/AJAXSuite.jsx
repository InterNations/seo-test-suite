import React from 'react';

import Suite from './Suite';
import AJAXTest from '../test/AJAXTest';

export default () => (
    <Suite name="AJAX Responses">
        <AJAXTest delay={0} name="ajaxContent" />
        <AJAXTest delay={2} name="ajaxContent" />
        <AJAXTest delay={4} name="ajaxContent" />
        <AJAXTest delay={7} name="ajaxContent" />
    </Suite>
);
