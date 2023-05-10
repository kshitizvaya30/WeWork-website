import React from 'react';

const FilledLoader = ({ filledPercentage }) => {
  const filledLoaders = Math.ceil(filledPercentage / 5);
  const totalLoaders = 20;

  const renderLoaders = () => {
    const loaders = [];

    for (let i = 0; i < totalLoaders; i++) {
      const isFilled = i < filledLoaders;
      const loaderStyle = {
        backgroundColor: isFilled ? '#00B686' : '#D3D7D7',
        height: '8px',
        width: '10px',
        marginRight: '2px',
        marginLeft: '0px',
        borderRadius: i === 0 ? '10px 0 0 10px' : i === totalLoaders - 1 ? '0 10px 10px 0' : 'none',
      };

      loaders.push(<div key={i} style={loaderStyle} />);
    }

    return loaders;
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>{renderLoaders()}</div>
    </div>
  );
};

export default FilledLoader;
