import { helloWorld } from '@repo/def/rules/sample';
import { sayHello } from '~/hello';

const name: string = 'TypeScript';

const message = sayHello(name);

console.log(message);
console.log(helloWorld);
