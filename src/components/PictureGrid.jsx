import React, { useEffect }  from 'react';

export const PictureGrid = ({children}) => {

  const image = new Image();
  let imageUrl = "https://i.postimg.cc/pTrprFYH/Whats-App-Image-2021-09-13-at-14-49-25-Photo-Room.png";

  useEffect(() => {
    image.onload = function() {
      document.getElementById("image");
    }

    image.src = imageUrl;

  }, [])

  return (
    <div className="information">
      {children}
      <picture>
        <img src={imageUrl} alt="Neyen Marinelli"/>
      </picture>
     </div>
  )
};
