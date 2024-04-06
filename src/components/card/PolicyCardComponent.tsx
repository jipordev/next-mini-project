// components/PolicyCard.js

import { PolicyType } from "../types/PolicyType";

const PolicyCard = ({ title, description }: PolicyType) => {
    return (
      <div className="max-w-sm py-5 px-8 bg-white rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default PolicyCard;
  