import Link from "next/link";
import React from "react";

const CategroriesList = ({data} : {data : string[]}) => {
 

  return <ul className="flex flex-col gap-5">
    {data.map(item => (
        <li key={item}>
            <Link href={"/"} className="border-b-2 border-transparent hover:border-main-color font-semibold">
            {item}
            </Link>
        </li>

    ))}
    
  </ul>;
};

export default CategroriesList;
