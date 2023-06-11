import React, { useEffect } from 'react';

export interface FeatureWrapperProps {
  name: string;
  element: React.ReactNode;
}

export const FeatureWrapper = (props: FeatureWrapperProps) => {
  useEffect(() => {
    document.title = `${props.name} · Prices from the OSRS Wiki`;
  }, [props.name]);

  return <>{props.element}</>;
};
