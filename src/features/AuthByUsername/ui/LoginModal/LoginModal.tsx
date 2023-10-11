import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    onClose?: () => void
    isOpen?: boolean
}

export const LoginModal = ({ onClose, isOpen }: LoginModalProps) => (
  <Modal lazy onClose={onClose} isOpen={isOpen}>
    <LoginForm />
  </Modal>
);
