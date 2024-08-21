"use client"

import React, { useState } from 'react';

import HelpCardModal from '../HelpCardModal/HelpCardModal';

import { Card } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons';

interface HelpButtonProps {
  title: string;
  videoUrl: string;
  description: string;
}

const HelpButton: React.FC<HelpButtonProps> = ({ title, videoUrl, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  // Extrai o ID do vídeo do URL do YouTube
  const getYouTubeVideoId = (url: string): string | null => {
    const regex = /[?&]v=([^&#]*)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(videoUrl);
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';

  return (
    <div>
      <Card
        style={{ width: 280, height: 265, background: "#E0E0E0"}}
        bodyStyle={{ padding: '15px 10px 20px 10px' }}
      >
        <h3 className="text-base font-bold mb-[9px] mx-[5px] font-roboto overflow-hidden overflow-ellipsis ">
          {title}
        </h3>

        <p className="mb-[9px] text-[13px] font-roboto h-[82px] w-full overflow-auto break-words">
          {description}
        </p>

        <div
          className="mx-1 relative cursor-pointer flex items-center justify-center w-[97%] h-28"
          onClick={showModal}
        >
          <img
            alt={title}
            src={thumbnailUrl}
            className="w-full h-28 object-cover rounded-lg border-[3px] border-white"
          />
          <PlayCircleFilled 
             className="absolute text-white text-[48px]"
          />
        </div>

      </Card>

      {isModalOpen && (
        <HelpCardModal
          title={title}
          videoUrl={videoUrl}
          isOpen={isModalOpen}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default HelpButton;
