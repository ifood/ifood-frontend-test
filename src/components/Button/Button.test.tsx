import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import Button from './Button';

const mockOnClick = jest.fn();

const initialData = {
  label: 'test',
  onClick: mockOnClick,
}

describe('Button component', () => {
  test('Simple render', () => {
    const { container } = render(<Button {...initialData} />);
    expect(container.querySelector('.button-component')).toBeInTheDocument();
  });

  test('on click emit event', async () => {
    const { container } = render(<Button {...initialData} />);

    const button: HTMLElement | null = container.querySelector('.button-component');

    await act(async () => {
      if (button) {
        await fireEvent.click(button);
      }
    });

    expect(mockOnClick).toHaveBeenCalled();
  });
});
