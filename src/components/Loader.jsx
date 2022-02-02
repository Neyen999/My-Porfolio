import React from 'react';
import '../newStyles/components/Loader.css'

export const Loader = () => {
  return (
    <div className="lds-ring">
      <div></div><div></div><div></div><div></div>
    </div>
  )
}
