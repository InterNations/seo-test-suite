import React from 'react';

import Suite from './Suite';
import PopoverTest from '../test/PopoverTest';
import PaginatorTest from '../test/PaginatorTest';

export default () => (
    <Suite name="JS Components">
        <div>
            <h5>Popover</h5>
            <PopoverTest trigger="click">
                <h2>London sights for Sunny or Stormy Weather - Part 1</h2>
                <p>When the weather is nice, you can take a stroll through the famous Hyde Park, or paddle around the Serpentine Lake? As the park is so big, it is sometimes easy to forget you’re still in central London. During the summer, Hyde Park also hosts The British Summer Time events, featuring some of the biggest names in music playing a show annually for the entirety of July. In the past, the event has seen legendary artists such as The Who, Blur and American artists such as Taylor Swift and The Strokes. Can anything beat good live music, warm weather and a group of friends? We don’t think so.</p>
            </PopoverTest>
            <PopoverTest trigger="hover">
                <h2>London sights for Sunny or Stormy Weather - Part 2</h2>
                <p>If the clouds roll in, you can head inside to one of London’s many famous museums. For example, no visit to London is complete without a visit to the British Museum, which is one of the world’s oldest museums. The most popular exhibits here include mummies and the Lindow Man, which was regarded as the most significant archeological find of the 1980’s.</p>
            </PopoverTest>
        </div>
        <div>
            <h5>Popover with AJAX</h5>
            <PopoverTest trigger="click" name="popover" />
        </div>
        <div>
            <h5>Manual Paginator</h5>
            <PaginatorTest name="manualPaginator" />
        </div>
        <div>
            <h5>Infinite Paginator</h5>
            <PaginatorTest name="automaticPaginator" infinite={true} />
        </div>
    </Suite>
);
