# Lucide Micro

Generic component for [Lucide](https://github.com/lucide-icons/lucide) icons. Without importing the entire Lucide library.

> Make sure `splitChunks.chunks` is set to `all` in your `Webpack`/`Rspack` config for the best results.

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
