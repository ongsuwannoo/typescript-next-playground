import { ModalProps } from '@/types/components';
import { Modal as ModalAntd } from 'antd';

const Modal = ({ children, ...props }: ModalProps) => {
  return <ModalAntd {...props}>{children}</ModalAntd>;
};

export default Modal;
