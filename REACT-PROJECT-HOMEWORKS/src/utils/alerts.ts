import Swal from "sweetalert2";

export function showSuccessToast(message: string): void {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1800,
    timerProgressBar: true,
  });
}

export function showInfoToast(message: string): void {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "info",
    title: message,
    showConfirmButton: false,
    timer: 1800,
    timerProgressBar: true,
  });
}

export function showWarningToast(message: string): void {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "warning",
    title: message,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
}