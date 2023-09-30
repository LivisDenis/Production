import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode
    domNode?: Element
}

export const Portal = (props: PortalProps) => {
  const {
    children,
    domNode = document.getElementById('root'),
  } = props;

  return createPortal(children, domNode);
};
