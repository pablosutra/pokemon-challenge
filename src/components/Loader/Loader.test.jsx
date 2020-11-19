import { render, screen } from '@testing-library/react';
import {Loader} from './Loader';

describe('<Loader />', ()=> {
    test('renders properly', () => {
        render(<Loader />);
        expect(screen).toMatchSnapshot()
    });
})
