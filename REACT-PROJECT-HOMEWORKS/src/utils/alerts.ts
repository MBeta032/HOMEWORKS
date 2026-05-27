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

export function showErrorAlert(message: string): void {
  Swal.fire({
    icon: "error",
    title: "Algo salió mal",
    text: message,
    confirmButtonText: "Entendido",
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