import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/movieSlice';
import VideoBackground from './videoBackground';

export default function MovieDialogue() {
    const dispatch=useDispatch()
 

  const {open,id} = useSelector(store =>store.movie)

  const handleClose=()=>{
    dispatch(setOpen(false))
  }

  

  return (
    <React.Fragment>
      <Button variant="outlined">
 
      </Button>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <VideoBackground movieId={id}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
         
            
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}