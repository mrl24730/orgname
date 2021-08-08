import { render } from '@testing-library/react';

import PihkUi from './pihk-ui';

describe('PihkUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PihkUi />);
    expect(baseElement).toBeTruthy();
  });
});
