"use client";

import React from 'react';
import CardContent from './CardContent';
import CardImage from './CardImage';

type CardProps = {
  children: React.ReactNode;
  imageSrc: string;
};

const StyledCard: React.FC<CardProps> = ({ children, imageSrc }) => {
  return (
    <div className="flex flex-row w-full h-full rounded-lg overflow-hidden shadow-md">
      {/* CardContent on the left occupying 2/3 */}
      <div className="flex-[2]">
        <CardContent>{children}</CardContent>
      </div>
      {/* CardImage on the right occupying 1/3 */}
      <div className="flex-[1]">
        <CardImage imageSrc={imageSrc} />
      </div>
    </div>
  );
};

export default StyledCard;
