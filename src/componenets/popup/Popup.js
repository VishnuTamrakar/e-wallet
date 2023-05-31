import React, { useEffect, useState } from 'react'
import { Modal} from 'react-bootstrap'

const Popup = () => {
    const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);



  
  return (
    <>
    
    <div className='popup text-center'>
       <Modal show={showModal}>
        
        <Modal.Header className='text-center' style={{display:'flex',alignItems:'center',justifyContent:'center',color:"#0114a7"}}>Welcome!
          <br /> to your e-wallet applicatin
          </Modal.Header>

        
       </Modal>
   
    </div>
    </>
  )
}

export default Popup
