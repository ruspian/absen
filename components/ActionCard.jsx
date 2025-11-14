import React from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const ActionCard = ({ title, desc, href }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(href)}
      className="border rounded-lg p-4 text-left hover:bg-muted/50 transition-colors w-full flex justify-between items-center cursor-pointer"
    >
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
      <ArrowRight className="h-5 w-5 text-primary" />
    </button>
  );
};

export default ActionCard;
