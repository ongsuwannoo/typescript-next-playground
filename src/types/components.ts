import { TableProps as TableAntdProps, ButtonProps as ButtonAntdProps, ModalProps as ModalAntdProps } from 'antd';

export interface TableProps<T> extends TableAntdProps<T> {
  columns: TableAntdProps<T>['columns'];
  data: TableAntdProps<T>['dataSource'];
}

export interface ButtonProps extends ButtonAntdProps {
  children?: React.ReactNode;
}

export interface ModalProps extends ModalAntdProps {
  children?: React.ReactNode;
}