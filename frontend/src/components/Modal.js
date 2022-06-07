import React from 'react'

const Modal = ({children}) => {
  return (
    <div className='bg-black inset-0 absolute bg-opacity-50 flex justify-center items-center'>
        {children}
     </div>
  )
}

export default Modal