import Swal from 'sweetalert2'

export default Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1300,
  timerProgressBar: true,
  iconColor: '#5D7067',
  background: '#ffffff',
  color: '#5D7067',
  customClass: {
    popup: 'radius0'
  }
})
