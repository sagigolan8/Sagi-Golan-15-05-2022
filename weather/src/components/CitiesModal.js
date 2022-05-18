import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { Button} from '@mui/material';
import { GrClose } from 'react-icons/gr';
import { motion } from 'framer-motion';
import CapitalsTable from './CapitalsTable';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
        <GrClose/>
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CitiesModal() {
  
  const [open, setOpen] = React.useState(false);
  const [theme, setTheme] = React.useState({border:'none'})

  const initial = {
		y: 0,
		opacity: 0,
	};

  const animate = {
		y: 0,
		opacity: 1,
	};

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = async () => {
    setOpen(false);
  };

  return (
    <div className="modal"> 
      <span variant="outlined" onClick={handleClickOpen}>
      <button type="button" className="capitals-btn">Cities examples</button>
      </span>
        <BootstrapDialog 
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <motion.div
            initial={initial}
            transition={{ delay: 0.1, duration:0.2 }}
            animate={animate}
          >
          <BootstrapDialogTitle 
            style={theme} 
            id="customized-dialog-title" 
            onClose={handleClose}
            >
          </BootstrapDialogTitle>
          <DialogContent style={theme} dividers>
           <CapitalsTable/>
          </DialogContent>
          <DialogActions style={theme}>
            <Button style={{fontSize:'30px'}} onClick={handleClose}>
              ✔
            </Button>
          </DialogActions>
          </motion.div>
        </BootstrapDialog>
    </div>
  );
}