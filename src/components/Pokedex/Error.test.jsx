import { render, screen } from '@testing-library/react';
import { Error } from './Error';
const errorMessage = 'Oops!, something went wrong, please, try again later.';
describe('<Error />', () => {
  test('renders error message', () => {
    render(<Error />);
    const errorTextElement = screen.getAllByText(errorMessage);
    expect(errorTextElement).toHaveLength(1);
  });
  test('renders image', () => {
    render(<Error />);
    const errorImage = screen.getByAltText('pokeball');
    expect(errorImage).not.toBe(null);
  });
});
