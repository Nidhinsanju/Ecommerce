"use client";
import { Button } from "@/components/ui/button";

export default function ButtonPress({ ProductID }: { ProductID: Number }) {
  return (
    <div className="mt-4">
      <Button onClick={() => console.log(ProductID)} variant="outline">
        Buy now
      </Button>
    </div>
  );
}
