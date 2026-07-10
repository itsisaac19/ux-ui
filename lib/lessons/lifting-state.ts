import type { Lesson } from "@/lib/lessons/types"

export const liftingStateLesson: Lesson = {
  slug: "lifting-state",
  title: "Lifting state up",
  description:
    "Share state between sibling components by moving it to their closest common parent.",
  concept: "lifting state",
  objectives: [
    "Keep cart state in a parent component",
    "Pass values down as props",
    "Pass updater functions to children",
  ],
  hints: [
    "Add a second product button and reuse addToCart.",
    "Try showing item count in the header.",
    "Extract CartSummary into its own function component.",
  ],
  activeFile: "/App.tsx",
  files: {
    "/App.tsx": `import { useState } from "react";
import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from "./components/ui";

type CartItem = {
  id: string;
  name: string;
  price: number;
};

const products: CartItem[] = [
  { id: "kit", name: "Starter kit", price: 29 },
  { id: "pro", name: "Pro license", price: 99 },
];

function ProductCard({
  item,
  onAdd,
}: {
  item: CartItem;
  onAdd: (item: CartItem) => void;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
      </CardHeader>
      <CardContent className="card-row">
        <span className="price">{"$" + item.price}</span>
        <Button onClick={() => onAdd(item)}>Add to cart</Button>
      </CardContent>
    </Card>
  );
}

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(item: CartItem) {
    setCart((current) => [...current, item]);
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="preview-root stack">
      <div className="row" style={{ justifyContent: "space-between" }}>
        <div>
          <h2 style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>Mini shop</h2>
          <p className="muted">State lives in App and flows down as props.</p>
        </div>
        <Badge>{cart.length} items</Badge>
      </div>

      <div className="stack">
        {products.map((product) => (
          <ProductCard key={product.id} item={product} onAdd={addToCart} />
        ))}
      </div>

      <div className="state-panel">
        <strong>State inspector</strong>
        <div className="mono">cart = {JSON.stringify(cart.map((item) => item.name))}</div>
        <div className="mono">total = {total}</div>
      </div>
    </div>
  );
}
`,
  },
}
