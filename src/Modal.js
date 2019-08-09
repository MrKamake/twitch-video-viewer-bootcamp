import React from 'react';
import cn from 'classnames';
import './Modal.css';

export default function Modal({ videoId, description, handleClickModal }) {
  return (
    <>
      <div className='modals-background' onClick={handleClickModal}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          <iframe className='modal-iframe'
            title={'title'}
            src={`https://player.twitch.tv/?video=v${videoId}&autoplay=false`}
            height='500'
            width='800'
            frameBorder='0'
            scrolling='no'
            allowFullScreen={true}
          >
          </iframe>
          <div className={cn({'video-description': description})}>{description}</div>
        </div>
      </div>
    </>
  );
}
