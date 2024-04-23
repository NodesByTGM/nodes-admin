import React from "react";
import { Button } from "../../components";
import {useNavigate} from 'react-router-dom'
export default function UpgradeCTA() {
  const navigate = useNavigate()
  return (
 <div className="relative">
       <div className=" mx-auto mt-[24px] mb-[51px] max-w-[360px] flex flex-col items-center justify-center">
      <p className="text-center text-[24px] font-medium mb-4">
        Want more out of <span className="text-primary">Nodes</span>?
      </p>
      <p className="text-center mb-[43px]">
        Upgrade your account today and get access to stuff, stuff, stuff, stuff
      </p>


      <Button onClick={() => navigate('/subscription')} className={'max-w-[196px]'}>Upgrade your account</Button>
    </div>
    <img src="/img/dashboardctabg.png" alt="" className="absolute top-0 bottom-0" />

 </div>
  );
}
