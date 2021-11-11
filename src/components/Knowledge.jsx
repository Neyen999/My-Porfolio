import React from 'react';

export const Knowledge = ({ type, iconType, children }) => {
  return (
    <>
    <div className={`conocimiento--${type}`}>
      <i className={`fab fa-${iconType} icon-config`}></i>
      {children}
    </div>
    
    </>
  );
};
