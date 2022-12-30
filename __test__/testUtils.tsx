import React from 'react';
import { render } from '@testing-library/react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faLinkedin, faGithub, faCodepen, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faFile,faChevronDown } from '@fortawesome/free-solid-svg-icons'
library.add(faInstagram, faLinkedin, faGithub, faCodepen, faTwitter, faChevronRight, faFile, faChevronDown)
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
