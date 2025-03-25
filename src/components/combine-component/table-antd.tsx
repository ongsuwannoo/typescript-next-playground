import { TableProps } from '@/types/components';
import { Table as TableAntd } from 'antd';

const Table = <T extends object>({ columns, data, ...props }: TableProps<T>) => {
  return <TableAntd<T> columns={columns} dataSource={data} {...props} />;
};

export default Table;
