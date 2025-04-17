import React from "react";

export default function TransactionsCard({
  name,
  icon: Icon,
  description,
  amt,
  date,
}) {
  return (
    <div className="border rounded-lg px-3 py-2 border-primary-1/25 justify-between flex ">
      <div className="normalFlex gap-2">
        <div className="w-10 h-10 normalFlex text-secondary-2 bg-secondary-1/25 rounded-full">
          <Icon size={24} />
        </div>{" "}
        <div className="text-start leading-tight">
          <h3 className="text-primary-1 font-medium ">{name}</h3>
          <p className="text-primary-2 text-[12px]">{description}</p>
        </div>
      </div>
      <div className="text-end leading-tight ">
        <h3 className="text-secondary-2 font-medium ">R{amt}</h3>
        <p className="text-primary-2 text-[12px]">{date}</p>
      </div>
    </div>
  );
}
