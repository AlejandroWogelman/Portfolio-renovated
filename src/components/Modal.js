import React, { createElement } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const download = () => {
  const a = document.createElement("a");
  a.href = require("../assets/Wogelman-Alejandro-Es.pdf").default;
  a.setAttribute("download", "CV-Wogelman-Alejandro");
  a.click();
};

export const viewModal = () => {
  const MySwal = withReactContent(Swal);

  return MySwal.fire({
    imageUrl: require("../assets/Alejandro-Wogelman-Es.png").default,
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
