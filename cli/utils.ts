import iconMap from "lucide-react/dynamicIconImports";

const icons = Object.keys(iconMap);

// function will convert the icon name to camelCase with the firt letter in uppercase
function toCamelCaseWithFirstCharUppercase(str) {
  return str.replace(/(^\w|-\w)/g, (c) => c.replace(/-/, "").toUpperCase());
}

const componentNames = icons.map((icon) =>
  toCamelCaseWithFirstCharUppercase(icon)
);

export default componentNames;


