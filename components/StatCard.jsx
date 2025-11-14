import React from "react";

const StatCard = ({ title, value, desc, icon }) => {
  return (
    <div className="border rounded-lg p-4 flex items-center gap-4">
      <div className="p-3 bg-primary/10 rounded-md">{icon}</div>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
};

export default StatCard;
