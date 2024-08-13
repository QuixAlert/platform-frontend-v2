import React, { useState } from 'react';
import { Modal, Spin } from 'antd';
import ReactPlayer from 'react-player';
import "./style.css";

interface HelpCardModalProps {
  title: string;
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const HelpCardModal: React.FC<HelpCardModalProps> = ({ title, videoUrl, isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [player, setPlayer] = useState<ReactPlayer | null>(null);

  const handleCancel = () => {
    if (player) {
      player.seekTo(0); // Retorna o vídeo ao início
    }
    onClose();
    setIsLoading(false);
  };

  const handleReady = () => {
    setIsLoading(false);
  };

  return (
    <Modal
      title={
        <p className='font-semibold text-[24px] modal-title'>
          {title}
        </p>
      }
      className="custom-modal"
      open={isOpen}
      onCancel={handleCancel}
      footer={null}
      centered
      width={1100}
      height={650}
      styles={{
        content: {
          backgroundColor: '#E0E0E0',
          padding: '10px',
          marginBottom: "50px",
        },
        header: {
          backgroundColor: '#E0E0E0',
          padding: "5px",
        },
      }}
    >
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">    
          <Spin size='large' />
        </div>
      )}

      <ReactPlayer
        ref={(player) => setPlayer(player)}
        url={videoUrl}
        controls
        onReady={handleReady}
        onStart={() => setIsLoading(false)}
        width={'100%'}
        height={'600px'}
        className="react-player"
      />
    </Modal>
  );
}

export default HelpCardModal;
