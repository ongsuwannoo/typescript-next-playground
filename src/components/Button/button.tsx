import { Button as ButtonAntd, ButtonProps as ButtonAntdProps } from 'antd';

interface ButtonProps extends ButtonAntdProps {
  children?: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ButtonAntd type="primary" {...props}>
      {children}
    </ButtonAntd>
  );
};

export default Button;
