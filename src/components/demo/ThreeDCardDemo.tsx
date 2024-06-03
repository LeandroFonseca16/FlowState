import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <div>
      <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600  dark:text-neutral-500"
        >
          Flow State
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-xl font-bold max-w-sm mt-2 pb-3 dark:text-neutral-100 text-center flex justify-center items-center h-40"
        >
          Get into the flow .
        </CardItem>
        
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={10}
            translateX={-30}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try Now →
          </CardItem>
          <CardItem
            translateZ={10}
            translateX={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Login
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
      </div>
  );
}
