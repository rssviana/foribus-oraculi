import { toast } from 'react-toastify';

toast.configure({
  position: 'bottom-center',
  hideProgressBar: true,
  autoClose: 5000,
  closeButton: false,
  draggable: false,
});

export default toast;
