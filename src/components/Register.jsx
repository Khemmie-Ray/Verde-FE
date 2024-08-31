import  { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: 'white',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: 10,
    boxShadow: 24,
    border: '1px solid #42714262',
    backgroundColor: '#1E1D34',
    p: 4,
  };

const Register = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
    <div>
      <button className="bg-primary text-secondary py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] lg:w-[50%] md:w-[50%] my-2 hover:bg-bg-ash hover:text-darkGrey hover:font-bold" onClick={handleOpen}>Join Campaign</button>
<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input type="text" className="rounded-lg w-[100%] text-white p-4 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none"  placeholder='Name' />
          <input type="text" className="rounded-lg w-[100%] text-white p-4 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none"  placeholder='Email' />

          <input type="text" className="rounded-lg w-[100%] text-white p-4 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none"  placeholder='Wallet address'/>
          <button className="bg-secondary text-primary py-2 px-4 rounded-lg font-bold text-[16px] w-[100%] my-2 hover:bg-bg-ash hover:text-darkGrey hover:font-bold">Submit</button>  
        </Box>
      </Modal>
    </div>
  </div>
  )
}

export default Register