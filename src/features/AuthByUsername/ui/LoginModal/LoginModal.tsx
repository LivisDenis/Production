import { Modal } from 'shared/ui/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

interface LoginModalProps {
    onClose?: () => void
    isOpen?: boolean
}

export const LoginModal = ({ onClose, isOpen }: LoginModalProps) => (
  <Modal lazy onClose={onClose} isOpen={isOpen}>
    <Suspense fallback={<Loader />}>
      <LoginFormLazy onSuccess={onClose} />
    </Suspense>
  </Modal>
);
