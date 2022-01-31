import { render } from '@testing-library/react';

import ReactDashboard from './react-dashboard';

describe('ReactDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
