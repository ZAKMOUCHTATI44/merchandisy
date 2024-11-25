import Image from "next/image";
import React from "react";

const TrustBy = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <p>Excellent 4.8 out 5</p>
        <Image
          src={"/trustpilot.svg"}
          alt="trustpilot"
          width={75}
          height={75}
        />
      </div>
      <div className="flex items-center gap-2">
        <p>Excellent 4.8 out 5</p>
        <Image src={"/google.png"} alt="trustpilot" width={15} height={15} />
        <span>Google</span>
      </div>
    </div>
  );
};

export default TrustBy;
