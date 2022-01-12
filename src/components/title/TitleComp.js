import React from 'react';
import './TitleComp.scss';

const TitleComp = ({title}) => {
  return (
    <div className="title-border d-flex justify-content-center align-items-center">
      <h6 className="title">{title}</h6>
    </div>
  );
};

export default TitleComp;