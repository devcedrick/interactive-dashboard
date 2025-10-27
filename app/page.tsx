import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Button size={"lg"}>
        <CirclePlus />
        Click me, please
      </Button>
    </div>
  );
}
