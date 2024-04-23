import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

export default function RatingStar({ active }) {
  return <div>{active ? <FaStar className='size-[40px]' /> : <CiStar className='size-[40px]' />}</div>;
}
