import React from "react";

interface Props {
  text: string;
  styles?: string; // If you want to pass additional styles
}

const Heading: React.FC<Props> = ({ text, styles }) => {
  return (
    <div>
      <h1 className={`md:text-[20px] font-medium text-xl text-[#898989]  ${styles}`}>
        {text}
      </h1>
    </div>
  );
};

export default Heading;
