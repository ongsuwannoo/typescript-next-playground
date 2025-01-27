# **Introduction: TypeScript**

## **1. What is TypeScript?**

- Modern Web Development.
- TypeScript is a superset of JavaScript.
- TypeScript is a statically typed language.
- TypeScript is a compiled language.

---

## **2. Benefits of Using TypeScript**

### **2.1 Code Safety and Stability**

- Reduces runtime errors.
- Provides type safety, preventing common issues like `null` or `undefined` errors.

### **2.2 Development Efficiency and Maintainability**

- Easier and safer refactoring.
- Faster development in the long term.
- Ideal for large teams and complex projects.

### **2.3 Improved Developer Experience (DX)**

- Enhanced IntelliSense and auto-complete in IDEs like VS Code.
- Built-in type checking helps identify errors before runtime.

### **2.4 Third-party Libraries and Frameworks**

- Type Definitions: Libraries not written in TypeScript often provide type definitions (e.g., through DefinitelyTyped).
- Type Inference: Automatically infers types where possible.
- Safe library usage ensures correct arguments and return values.

### **2.5 Industry Adoption**

- Large companies like Microsoft, Google, and Airbnb widely adopt TypeScript.
- Many frameworks like Next.js, React, and Vue are optimized for TypeScript.
- Modern web development trends favor static typing for long-term maintainability.

---

## **3. Key Features of TypeScript**

### **3.1 Static Typing**

- Enables strong typing at compile time, reducing runtime errors.

  - Example:

    ```typescript
    function add(a: number, b: number): number {
      return a + b;
    }
    // TypeScript will catch errors like add('1', 2)
    ```

### **3.2 Type Definitions**

- Provides built-in documentation for code:

  - Example:

    ```typescript
    interface User {
      id: number;
      name: string;
    }

    function getUser(user: User): string {
      return `User: ${user.name}`;
    }
    ```

- Prevents misuse of APIs by enforcing expected input/output types.

  - Example:

    ```typescript
    interface User {
      id: number;
      name: string;
    }

    function getUser(user: User): string {
      return `User: ${user.name}`;
    }

    // Correct usage
    const validUser: User = { id: 1, name: 'Alice' };
    console.log(getUser(validUser)); // Output: User: Alice

    // Incorrect usage - TypeScript will give an error
    const invalidUser = { id: 'one', name: 'Bob' }; // Error: Type 'string' is not assignable to type 'number'
    console.log(getUser(invalidUser)); // This line will not compile
    ```

    ```typescript
    interface User {
      id: number;
      name: string;
    }

    interface UserOutput extends User {
      username: string;
    }

    function getUser(user: User): UserOutput {
      return { id: user.id, name: user.name, username: user.name.toLowerCase() };
    }

    // Correct usage
    const validUser: User = { id: 1, name: 'Alice' };
    console.log(getUser(validUser).username); // Output: { id: 1, name: 'Alice', username: 'alice'

    // Incorrect usage - TypeScript will give an error
    console.log(getUser(validUser).firstName); // Error: Argument of type '{ id: number; name: string; username: number; }' is not assignable to parameter of type 'User'
    ```

### **3.3 Advanced Type System**

- **Generics**: Write reusable and type-safe components.

  ```typescript
  function identity<T>(value: T): T {
    return value;
  }

  const num = identity<number>(42); // T is inferred as number
  ```

- **Union and Intersection Types**: Handle multiple possible types.

  ```typescript
  type Status = 'success' | 'error';
  type Response = { data: unknown } & { error: string };

  const status: Status = 'success';
  const response: Response = { data: { id: 1 }, error: '' };
  ```

- **Utility Types**: Built-in helpers for common type transformations.

  ```typescript
  type Point = { x: number; y: number };
  type PartialPoint = Partial<Point>;

  const point: PartialPoint = { x: 1 };
  ```

## **3.4 Improved Team Collaboration**

- Type definitions enhance clarity and communication within the team.
- Acts as built-in documentation to make APIs and services easier to integrate.

## **3.5 Developer Tools**

- Easier debugging and refactoring due to static typing.
- IDE support for auto-completion and error highlighting.

## **3.6 Integration with Third-party Libraries**

- Easily integrates with existing JavaScript libraries via type definitions.
- Example of using DefinitelyTyped:

  ```bash
  npm install --save-dev @types/react
  ```

**Note**: Not all libraries have type definitions, but many popular ones do.

## **4. Challenges and Limitations**

- Steeper learning curve for new developers.
- Initial setup can be more time-consuming compared to JavaScript.
- Requires additional configuration in larger projects.

## **5. Practical Examples**

- **Example 1**: Type Annotations

  ```typescript
  function greet(name: string): string {
    return `Hello, ${name}`;
  }

  greet('John'); // Works
  greet(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
  ```

- **Example 2**: Interfaces

  ```typescript
  interface User {
    id: number;
    name: string;
  }

  function getUser(user: User): string {
    return `User: ${user.name}`;
  }

  getUser({ id: 1, name: 'Alice' }); // Works
  getUser({ name: 'Bob' }); // Error: Property 'id' is missing in type '{ name: string; }' but required in type 'User'.
  ```

- **Example 3**: Generics

  ```typescript
  function identity<T>(value: T): T {
    return value;
  }

  const num = identity<number>(42); // T is inferred as number
  const str = identity<string>('Hello'); // T is inferred as string
  ```

- **Example 4**: Utility Types

  - Partial: Makes all properties of a type optional.

    ```typescript
    type Point = { x: number; y: number };
    type PartialPoint = Partial<Point>;

    const point: PartialPoint = { x: 1 };
    ```

  - Required: Makes all properties of a type required.

    ```typescript
    type PartialPoint = { x?: number; y?: number };
    type RequiredPoint = Required<PartialPoint>;

    const point: RequiredPoint = { x: 1, y: 2 };
    ```

  - Readonly: Makes all properties of a type read-only.

    ```typescript
    type Point = { x: number; y: number };
    type ReadonlyPoint = Readonly<Point>;

    const point: ReadonlyPoint = { x: 1, y: 2 };
    point.x = 3; // Error: Cannot assign to 'x' because it is a read-only property.
    ```

  - Pick: Picks only selected properties from a type.

    ```typescript
    type Point = { x: number; y: number; z: number };
    type Point2D = Pick<Point, 'x' | 'y'>;

    const point: Point2D = { x: 1, y: 2 };
    ```

  - Omit: Omits selected properties from a type.

    ```typescript
    type Point = { x: number; y: number; z: number };
    type Point2D = Omit<Point, 'z'>;

    const point: Point2D = { x: 1, y: 2 };
    ```

  - Record: Creates a type with a set of properties K of type T.

    ```typescript
    type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>;

    const obj: ThreeStringProps = { prop1: 'a', prop2: 'b', prop3: 'c' };
    ```

  - Exclude: Exclude from T those types that are assignable to U.

    ```typescript
    type T = string | number;
    type U = number;
    type TWithoutU = Exclude<T, U>; // string
    ```

  - Extract: Extract from T those types that are assignable to U.

    ```typescript
    type T = string | number;
    type U = number;
    type TExtractU = Extract<T, U>; // number
    ```

  - NonNullable: Exclude null and undefined from T.

    ```typescript
    type T = string | null | undefined;
    type TNonNull = NonNullable<T>; // string
    ```

  - ReturnType: Obtain the return type of a function type.

    ```typescript
    function f1(): { a: number; b: string } {
      return { a: 1, b: 'hello' };
    }

    type T1 = ReturnType<typeof f1>; // { a: number; b: string }
    ```
