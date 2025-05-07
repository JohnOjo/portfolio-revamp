import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import .\src\app\components\TechnologiesUsed from './.\src\app\components\TechnologiesUsed';

describe('<.\src\app\components\TechnologiesUsed />', () => {
  test('it should mount', () => {
    render(<.\src\app\components\TechnologiesUsed />);

    const srcAppComponentsTechnologiesUsed = screen.getByTestId('.\src\app\components\TechnologiesUsed');

    expect(srcAppComponentsTechnologiesUsed).toBeInTheDocument();
  });
});