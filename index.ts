export const getFunction = (name) => `
export function ${name}() {
  
}
`;

export const getClass = (name) => `
export class ${name} {
  
}
`;
export const getSpec = (name) =>
  `import test from 'ava';
import { ${name} } from './${name}';


// test(t => t.is());
`;

export const getMD = (name) =>
  `**${name}**

description

\`\`\`
code
\`\`\`
`;


export function getGenerator(type) {
  if (['c', 'class'].includes(type)) {
    return getClass;
  }

  if (['f', 'function'].includes(type)) {
    return getFunction;
  }
}
