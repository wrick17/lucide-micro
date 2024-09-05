# Lucide Micro

### Install
```bash
npm install --save lucide-micro
```

### Usage
```jsx
import Icon from "lucide-micro";

export default function App() {
  return (
    <div>
      <Icon name="House" />
      <Icon name="BellElectric" />
    </div>
  );
}
```

### Props
* Name: The name of the icon to be rendered.
* Any other props will be passed to the Lucide component.

### Example
```jsx
import Icon from "lucide-micro";

export default function App() {
  return (
    <div>
      <Icon name="House" size="xl" />
      <Icon name="BellElectric" color="red" />
    </div>
  );
}
```

### License
MIT
