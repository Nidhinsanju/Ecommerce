"use-client";
import { Button } from "@/components/ui/button";
export default function ButtonPress() {
  return (
    <div>
      <Button onClick={() => console.log("hi")} variant="outline">
        Button
      </Button>
    </div>
  );
}
