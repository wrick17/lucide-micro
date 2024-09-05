import React, { Suspense } from "react";
import { LucideProps } from "lucide-react";
import iconMap from "./iconMap";

interface Props extends LucideProps {
  icon: string;
}

const Icon = ({ name, ...props }: Props) => {
  return (
    <Suspense fallback={<></>}>
      {iconMap
        .map(({ label, component }) => {
          if (label === name) {
            const Component: any = component;
            return <Component {...props} />;
          }
          return undefined;
        })
        .filter(Boolean)}
    </Suspense>
  );
};

export default Icon;




