import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const errorNotification = (text,position='top-center') => {
  toast.error(text, {
    position,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });
}

export const successNotification = (text,position='top-center') => {
  toast.success(text, {
    position,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });
}

export const infoNotification = (text,position='top-center') => {
  toast.info(text, {
    position,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    });
}

