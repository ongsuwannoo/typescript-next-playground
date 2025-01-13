'use client';
import '@ant-design/v5-patch-for-react-19';

import { Button, Modal } from 'antd';
import { useState } from 'react';

export default function Page() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen">
      <Modal
        centered
        open={visible}
        title="Basic Modal"
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <div className="text-primary">Some contents...</div>
      </Modal>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Get started
      </Button>
    </div>
  );
}
