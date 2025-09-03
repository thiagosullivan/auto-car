"use client";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const LikeComponent = () => {
  function handleClick() {
    console.log("clickado");
  }

  return (
    <div>
      <Button
        variant="ghost"
        size="default"
        className="h-[45px] w-[45px] min-w-0 p-0 hover:bg-transparent"
      >
        <Heart stroke="#494949" style={{ scale: 2 }} onClick={handleClick} />
      </Button>
    </div>
  );
};

export default LikeComponent;
