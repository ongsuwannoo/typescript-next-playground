import { ButtonProps } from '@/types/components';
import { Button as ButtonAntd } from 'antd';

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ButtonAntd {...props}>
      {children}
    </ButtonAntd>
  );
};

export default Button;
