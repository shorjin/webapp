import React from 'react';

const VideoComponent = (props) => {
  const { title, videoSrc } = props;

  return (
    <div className="flex justify-center items-center h-1/2">
      <div className="w-1/2 text-center">
        <h1 className="text-3xl my-6">{title}</h1>
        <div className="relative" style={{ paddingBottom: '58%' }}>
          <iframe
            src={videoSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;