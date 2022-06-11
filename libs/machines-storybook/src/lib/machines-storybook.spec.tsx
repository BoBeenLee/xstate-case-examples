import { render } from '@testing-library/react';

import MachinesStorybook from './machines-storybook';

describe('MachinesStorybook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MachinesStorybook />);
    expect(baseElement).toBeTruthy();
  });
});
