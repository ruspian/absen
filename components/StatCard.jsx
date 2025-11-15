import React from "react";

export const StatCardAdmin = ({ icon, title, value }) => {
  return (
    <div className="border rounded-sm flex items-center gap-4 p-4">
      {/* Kasih warna & padding di ikon-nya, bukan di size */}
      <div className="p-3 bg-primary/10 rounded-md text-primary">
        {React.cloneElement(icon, { size: 40 })}
      </div>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <h1 className="font-bold text-3xl">{value}</h1>
      </div>
    </div>
  );
};

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
