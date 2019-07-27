import { asyncComponent } from 'react-async-component';

export const log = (...args) => console.log(...args);
export const logError = (...args) => console.error(...args);
export const renderIf = (test, component) => test ? component : undefined;
export const classToggler = (options) => Object.keys(options).filter(key => !!options[key]).join(' ');

export const makeAsyncComponent = importStmt => {
  return asyncComponent({
    resolve: () => importStmt
  })
};