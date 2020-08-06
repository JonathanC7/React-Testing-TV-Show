import React from 'react';
import Episodes from './Episodes';
import { render } from '@testing-library/react';

test('Renders correctly with and without data', () => {
    const { rerender, getAllByTestId, queryAllByTestId } = render(<Episodes episodes= {[]} />)

    const initialEpisodes = queryAllByTestId(/episode/i);
    expect(initialEpisodes).toHaveLength(0);

    rerender(<Episodes episodes={mockData}/>)

    const episodes = getAllByTestId(/episode/i);
    expect(episodes).toHaveLength(2);
})

const mockData = [{
    name: '',
    desc: ''
},{
    name: '',
    desc: ''
}];