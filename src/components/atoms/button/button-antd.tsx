import { ButtonProps } from '@/types/components';
import { Button as ButtonAntd } from 'antd';

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ButtonAntd type="primary" {...props}>
      {children}
    </ButtonAntd>
  );
};

export default Button;
