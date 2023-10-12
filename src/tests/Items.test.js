import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Items from '../redux/features/Items'; // Update with your component's path

// Mock your Redux store
const mockStore = configureStore([]);
const initialState = {
  items: {
    loading: false,
    items: [], // Provide initial state for your items
    error: '',
  },
};
const store = mockStore(initialState);

test('renders the Items component', () => {
  const { getByText, getByPlaceholderText } = render(
    <Provider store={store}>
      <Items />
    </Provider>,
  );

  // Assertions for your component
  // For example, check if some text or elements are present
  const searchInput = getByPlaceholderText('Search');
  const loadingText = getByText('Loading...');

  // Add more assertions as needed

  // Expectations
  expect(searchInput).toBeInTheDocument();
  expect(loadingText).toBeInTheDocument();
});
