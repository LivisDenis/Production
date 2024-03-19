import { Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { Loader } from '@/shared/ui/Loader';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

interface LoginModalProps {
    onClose: () => void
    isOpen: boolean
}

export const LoginModal = ({ onClose, isOpen }: LoginModalProps) => (
  <Modal lazy onClose={onClose} isOpen={isOpen}>
    <Suspense fallback={<Loader />}>
      <LoginFormLazy onSuccess={onClose} />
    </Suspense>
  </Modal>
);
