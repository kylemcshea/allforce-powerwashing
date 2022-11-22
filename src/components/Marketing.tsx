import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaClipboardCheck } from "react-icons/fa";

type MarketingProps = {
  desc: string;
  color: string;
  icon?: any;
};

const marketingData = (): MarketingProps[] => {
  return [
    {
      desc: "Affordable & Reliable",
      color: "bg-green-800",
      icon: <VscWorkspaceTrusted className="mx-auto" />,
    },
    {
      desc: "Professional & Experienced",
      color: "bg-green-500",
      icon: <FaRegThumbsUp className="mx-auto" />,
    },
    {
      desc: "Fully Insured",
      color: "bg-slate-600",
      icon: <FaClipboardCheck className="mx-auto" />,
    },
  ];
};

const MarketingCard = ({ item }: { item: MarketingProps }): JSX.Element => {
  return (
    <div className={`w-100 ${item.color} text-white text-2xl text-center p-4`}>
      {item.icon}
      {item.desc}
    </div>
  );
};

const Marketing: React.FC = () => {
  return (
    <div>
      {marketingData().map((item, index) => {
        return (
          <div key={index}>
            <MarketingCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Marketing;
