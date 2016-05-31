import React from 'react';
import Suite from './Suite';

import BreakpointTest from '../test/BreakpointTest';
import ControlTest from '../test/ControlTest';
import SetTimeoutTest from '../test/SetTimeoutTest';
import AJAXTest from '../test/AJAXTest';
import PopoverTest from '../test/PopoverTest';

export default () => (
    <Suite name="Breakpoint Test">
        <BreakpointTest minWidth={1300}>
            <ControlTest url="/seo-experiment-3/hk1">Brits Moving To Hong Kong - Part 1</ControlTest>
            <AJAXTest delay={0} name="Breakpoint1300" />
        </BreakpointTest>
        <BreakpointTest minWidth={1020}>
            <ControlTest url="/seo-experiment-3/hk2">Brits Moving To Hong Kong - Part 2</ControlTest>
            <AJAXTest delay={0} name="Breakpoint1020" />
        </BreakpointTest>
        <BreakpointTest minWidth={320}>
            <ControlTest url="/seo-experiment-3/hk3">Brits Moving To Hong Kong - Part 3</ControlTest>
            <AJAXTest delay={0} name="Breakpoint320" />
        </BreakpointTest>
    </Suite>
);
