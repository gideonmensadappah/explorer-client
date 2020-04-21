import React from 'react'
import fileIcon from './fileIcon.png';



 function File(props) {
  const { name = '', onClick, onDelete } = props,
    [justName, soffix] = name.split('.');
  
  return <div className='file' onClick={onClick}>
    <div className='fileIcon'>
      <img src={fileIcon} />
      <span>{soffix}</span>
    </div>
    <div className='fileName'>{justName}</div>
    <div className='x' onClick={onDelete}>x</div>
  </div>
}

export default File
