import * as fs from 'fs';
import * as program from 'commander';
import { getGenerator, getMD, getSpec } from './index';


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

