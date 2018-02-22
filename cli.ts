import * as fs from 'fs';
import * as program from 'commander';


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

program
  .arguments('<command> [type] [name]')
  .action((command, type, name) => {
    switch (command) {
      case 'g':
      case 'generate': {
        const dir = `./${name}`;
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }

        fs.writeFileSync(`${dir}/${name}.ts`, getGenerator(type)(name));
        fs.writeFileSync(`${dir}/${name}.spec.ts`, getSpec(name));
        fs.writeFileSync(`${dir}/README.md`, getMD(name));
        break;
      }
    }
  })
  .parse(process.argv);

function getGenerator(type) {
  if ([ 'c', 'class' ].includes(type)) {
    return getClass;
  }

  if ([ 'f', 'function' ].includes(type)) {
    return getFunction;
  }
}

