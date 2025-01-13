# TypeScript Next.js Starter

- Introduction: TypeScript

  - What is TypeScript?
    - TypeScript is a superset of JavaScript
    - TypeScript is a statically typed language
    - TypeScript is a compiled language
  - Why should you use TypeScript?
    - TypeScript trends and popularity
      - ในหลายโปรเจกต์ TS ถูกเลือกเป็น default แทน JavaScript โดยเฉพาะในงานที่เกี่ยวข้องกับ production
      - บริษัทและองค์กรขนาดใหญ่ เช่น Microsoft, Google, และ Airbnb ต่างก็ใช้ TS อย่างแพร่หลาย
    - ความต้องการโค้ดที่ปลอดภัยและเสถียร
      - การลดข้อผิดพลาดใน runtime
      - Type Safety
    - ประสิทธิภาพในการพัฒนาและการดูแลรักษา
      - การพัฒนาที่รวดเร็วขึ้น (ในระยะยาว)
      - การ refactor ที่ง่าย
      - เหมาะสำหรับทีมขนาดใหญ่
    - Intellisense และ Auto-complete ที่ดีกว่า
    - เทรนด์ของการพัฒนา Web Applications
      - Modern Web Development
      - Static Typing กำลังเป็นที่นิยม
    - Community support
    - ความต้องการของอุตสาหกรรม
      - การเปลี่ยนโฟกัสไปที่ Long-term Maintainability
    - TypeScript-first libraries and frameworks
      - Framework เช่น Next.js, React, และ Vue มีเครื่องมือที่ปรับแต่งให้ทำงานร่วมกับ TS ได้ดีขึ้น
      - Library ส่วนใหญ่ใน ecosystem ของ Node.js และ React มี Type Definitions (ผ่าน DefinitelyTyped) ให้ใช้
      - Developer Experience (DX) ที่ดีขึ้น เช่น การใช้งาน IDE ที่มีการระบุ Type ได้ดีขึ้น
  - TypeScript Features

    - Dynamic typing (JS) vs Static typing (TS)
    - Type Definitions

      - Type Safety
      - การลดข้อผิดพลาดใน runtime

      ```typescript
      function add(a: number, b: number): number {
        return a + b;
      }
      add(1, '2'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
      ```

      - ป้องกัน null/undefined errors

    - ปรับปรุงความเข้าใจและการสื่อสารในทีม

      - **เอกสารที่มาพร้อมกับโค้ด** Type definitions ทำหน้าที่เหมือนเอกสารที่บอกว่าโค้ดนี้ต้องการข้อมูลประเภทไหน และจะคืนค่าอะไร ซึ่งช่วยให้คนอื่นในทีม (หรือแม้แต่ตัวคุณเองในอนาคต) เข้าใจโค้ดได้ง่ายขึ้น

      ```typescript
      interface User {
        id: number;
        name: string;
        isActive: boolean;
      }
      const user: User = { id: 1, name: 'John Doe', isActive: true };
      ```

      - **การสื่อสารในทีม** เมื่อมี type definitions ที่ชัดเจน ทีมพัฒนาสามารถทำงานร่วมกันได้ง่ายขึ้น เช่น การพัฒนา API หรือการเชื่อมต่อกับบริการต่าง ๆ

    - Developer Experience - DX

      - **Auto-completion** IDE เช่น VS Code ใช้ type definitions เพื่อแนะนำคำสั่ง (autocomplete) และช่วยให้เขียนโค้ดได้เร็วขึ้น

      ```typescript
      const user: User = { id: 1, name: "John Doe", isActive: true };

      console.log(user.); // IDE แสดงชื่อฟิลด์ทั้งหมด เช่น id, name, isActive
      ```

      - **Refactoring ที่ง่ายขึ้น** เมื่อแก้ไขหรือเปลี่ยนแปลง type, TS จะบอกว่าโค้ดส่วนไหนได้รับผลกระทบบ้าง ช่วยให้ refactor โค้ดได้อย่างมั่นใจ

      ```typescript
      interface User {
        id: number;
        name: string;
        isActive: boolean;
      }
      const user: User = { id: 1, name: 'John Doe', isActive: true };

      user.isActive = 'yes'; // Error: Type 'string' is not assignable to type 'boolean'.
      ```

    - รองรับการทำงานกับ Third-party Libraries

      - **Type Definitions** สำหรับ library ที่ไม่ได้เขียนด้วย TypeScript สามารถใช้ type definitions จาก DefinitelyTyped ได้

      ```typescript
      import { useState } from 'react';

      const [count, setCount] = useState<number>(0);
      ```

      - **Type Inference** สามารถใช้ type inference ในการระบุ type โดยอัตโนมัติ

      ```typescript
      const count = 0; // Type: number
      const name = 'John Doe'; // Type: string
      const isActive = true; // Type: boolean
      ```

      - **การใช้งาน Third-party libraries อย่างปลอดภัย** Type definitions ช่วยให้คุณรู้ว่าฟังก์ชันใน library ต้องการ arguments อะไรและคืนค่าอะไร โดยไม่ต้องพึ่งพาการเปิดเอกสารบ่อย ๆ

      ```typescript
      import { Space, Table, Tag } from 'antd';
      import type { TableProps } from 'antd';

      interface DataType {
        key: string;
        name: string;
        tags: string[];
      }

      const columns: TableProps<DataType>['columns'] = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        }
      ];

      const data: DataType[] = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        }
      ];

      return <Table<DataType> columns={columns} dataSource={data} />;
      ```

      - **Casting** ช่วยให้คุณแปลงประเภทของข้อมูลได้อย่างปลอดภัย

      ```typescript
      const value: any = 'Hello, World!';
      const length = (value as string).length; // Type: number

      const value2: any = 42;
      const length2 = (<number>value2).length; // Error: Property 'length' does not exist on type 'number'.
      ```

      - **Generics Type** ช่วยให้เขียนโค้ดที่ใช้งานกับหลายประเภทของข้อมูลได้

      ```typescript
      function identity<T>(arg: T): T {
        return arg;
      }

      const output = identity<string>('Hello, World!'); // Type: string
      const output2 = identity<number>(42); // Type: number
      ```

<!--
  - Type Safety
  - Static Typing
  - Interfaces
  - Classes
  - Generics
  - Enums
  - Type Inference -->
