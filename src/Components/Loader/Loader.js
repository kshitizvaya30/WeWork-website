import React from 'react';
import './Loader.scss'

const FilledLoader = ({ filledPercentage }) => {
  const filledLoaders = Math.ceil(filledPercentage / 5);
  const totalLoaders = 20;

  const renderLoaders = () => {
    const loaders = [];

    for (let i = 0; i < totalLoaders; i++) {
      const isFilled = i < filledLoaders;
      const loaderStyle = {
        borderRadius: i === 0 ? '10px 0 0 10px' : i === totalLoaders - 1 ? '0 10px 10px 0' : 'none',
      };

      loaders.push(<div key={i} style={loaderStyle} className={isFilled ? "loaderStyle active" : "loaderStyle "} />);
    }

    return loaders;
  };

  return (
    <div>
      <div className="loaderContainer">{renderLoaders()}</div>
    </div>
  );
};

export default FilledLoader;
