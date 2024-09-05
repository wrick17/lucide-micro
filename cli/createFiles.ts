import Bun, { $ } from "bun";
import icons from "./utils";

// console.table(icons);

// create iconMap.ts file
const iconMapFileContent = `
import { lazy } from "react";

${icons
  .map((icon) => `const ${icon} = lazy(() => import("./components/${icon}"));`)
  .join("\n")}

export default [
  ${icons
    .map((icon) => `{ label: "${icon}", component: ${icon} },`)
    .join("\n  ")}
];
`;

await $`rm -rf src/components`;
await $`mkdir src/components`;

await Bun.write("src/iconMap.ts", iconMapFileContent);


// create each component file
icons.forEach(async (icon) => {
  const componentFileContent = `
  import React from 'react';
  import { ${icon}, LucideProps } from "lucide-react";

  export default function (props: LucideProps) {
    return <${icon} {...props} />;
  }
`;

  await Bun.write(`src/components/${icon}.tsx`, componentFileContent);
});






