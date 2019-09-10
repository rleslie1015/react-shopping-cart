import React from 'react';
import { render } from '@testing-library/react';

import Navigation from './Navigation';

test("Nav renders without crashing", () => {
    //assertions
    const nav = render(<Navigation />);
    nav.findByText(/products/i)
});

