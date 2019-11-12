import * as React from 'react';

export interface TestProps {
  compiler: string,
  framework: string
}

export const TestComponent = (props: TestProps) => (
  <h1>Hello from {props.compiler} and {props.framework}!</h1>
);