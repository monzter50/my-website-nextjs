import React from 'react';
import { render } from '@testing-library/react';

const ChakraRenderer: React.FC = ({ children }: React.PropsWithChildren<Record<string, any>>) => {
  return <>{children}</>;
};

const customRender = (ui:any, options = {}) =>
  render(ui, {
    wrapper: ChakraRenderer,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
