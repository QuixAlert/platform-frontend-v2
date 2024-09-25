"use client";

import React from 'react';
import Image from 'next/image';

type CardImageProps = {
  imageSrc: string;
};

const CardImage: React.FC<CardImageProps> = ({ imageSrc }) => {
  return (
    <div className="relative h-full w-full">
      <Image
        className="absolute inset-0 object-cover"
        src={imageSrc}
        layout="fill"
        alt="Card Image"
      />
    </div>
  );
};

export default CardImage;
