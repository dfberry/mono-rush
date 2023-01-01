import { MyType } from '@dfb/types';

export default function myFunction(): MyType {
  return {
    first: 'hello',
    second: 10
  } as MyType;
}
