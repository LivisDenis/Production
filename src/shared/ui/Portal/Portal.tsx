import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  domNode?: Element;
}

export const Portal = (props: PortalProps) => {
  const { children, domNode = document.body } = props;

  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  return domReady ? createPortal(children, domNode) : null;
};
