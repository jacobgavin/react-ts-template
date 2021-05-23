import { render } from '@testing-library/react';
import App from './App';

describe('<App />', function() {
	it('renders text to DOM', function() {
		const sut = render(<App />);

		expect(sut.getByTestId('app').textContent).toBe(`What's up App!?`);
	});
});
