import { render } from '@testing-library/react';

import PnUi from './pn-ui';

describe('PnUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PnUi />);
    expect(baseElement).toBeTruthy();
  });
});
