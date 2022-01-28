import React from "react";
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';
import { unstable_renderSubtreeIntoContainer } from "react-dom";

afterEach(cleanup);

describe('About component', () =>{
    it('renders', () => {
        render(<About />);
    })
    it('matches snapshot DOM node structrure', () => {
        const {asFragment} = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})