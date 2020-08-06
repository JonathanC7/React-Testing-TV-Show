import React from 'react';
import App from './App';
import { render, waitFor } from '@testing-library/react';

test('Checks if fetching data displays', () => {
    const { rerender, getByTestId } = render(<App />);
    const fetchData = getByTestId('fetch-data');
    expect(fetchData).toBeInTheDocument();
})

test('Checks if poster renders after fetching data is done', async () => {
    const { rerender, getByTestId } = render(<App />);

    await waitFor(() => { expect(getByTestId('app'))})
    const poster = getByTestId('poster');
    expect(poster).toBeInTheDocument();
})