import * as fs from 'fs';
import * as program from 'commander';

const templates = {
  function: `
export function {{name}}() {
  
}
  `,
  class: `
export class {{name}} {
  
}
  `,
  spec: `import test from 'ava';
import { {{name}} } from './{{name}}';


// test(t => t.is());
  `,
  readme: `**{{name}}**

description

\`\`\`
code
\`\`\`
  `
};

program
  .arguments('<command> [type] [name]')
  .action((command, type, name) => {
    switch (command) {
      case 'g':
      case 'generate': {
        const dir = `./${name}`;
        if (!fs.existsSync(dir)){
          fs.mkdirSync(dir);
        }

        fs.writeFileSync(
          `${dir}/${name}.ts`,
          templates[getObjectType(type)].replace(/{{name}}/g, name)
        );

        fs.writeFileSync(
          `${dir}/${name}.spec.ts`,
          templates.spec.replace(/{{name}}/g, name)
        );

        fs.writeFileSync(
          `${dir}/README.md`,
          templates.readme.replace(/{{name}}/g, name)
        );

        break;
      }
    }
  })
  .parse(process.argv);


function getObjectType(type) {
  if (['c', 'class'].includes(type)) {
    return 'class';
  }

  if (['f', 'function'].includes(type)) {
    return 'function';
  }
}