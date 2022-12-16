import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const download = () => {
  const a = document.createElement("a");
  a.href = require("../assets/Wogelman-Front-1.pdf").default;
  a.setAttribute("download", "CV-Wogelman-Alejandro");
  a.click();
};

export const viewModal = () => {
  const MySwal = withReactContent(Swal);

  return MySwal.fire({
    imageUrl: require("../assets/Wogelman.png").default,
    imageWidth: "1000",
    imageAlt: "C.V",
    showCancelButton: true,
    confirmButtonText: "Descargar PDF",
    customClass: {
      popup: "popup-content",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      download();
    }
  });
};
