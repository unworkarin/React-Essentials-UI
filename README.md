# React Essentials UI

A small, opinionated UI component library for React — ready to publish and sponsor on GitHub.  
Includes Button, Card, Input components and a minimal demo page.

## Features
- Button with variants (primary, secondary)
- Card component with header/body/footer
- Input with label and validation styles
- Ready-to-use CSS, CommonJS exports

## Install (local/dev)
```bash
# after publishing or local linking
npm install react-essentials-ui
```

## Usage
```jsx
import React from "react";
import { Button, Card, Input } from "react-essentials-ui";
import "react-essentials-ui/dist/styles.css";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <Card title="Demo card" footer="Footer text">
        <p>This is a demo of the Card component.</p>
        <Input label="Name" placeholder="Your name" />
        <Button variant="primary" onClick={() => alert('Clicked')}>Submit</Button>
      </Card>
    </div>
  );
}
```

## Sponsor
If you like this library, consider supporting development on GitHub Sponsors ❤️

## License
MIT
