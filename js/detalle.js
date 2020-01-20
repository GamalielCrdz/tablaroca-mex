window.onload = async function() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const indexPage = urlParams.get("d");
  const galeria = document.getElementById("galeria");
  let type = "AISLANTE";
  let currentModalIndex = 0;
  document.getElementById("modal-next").addEventListener("click", () => {
    transitionModal("next");
  });
  document.getElementById("modal-back").addEventListener("click", () => {
    transitionModal("back");
  });

  switch (indexPage) {
    case "1":
      type = "CAJILLO";
      break;
    case "2":
      type = "DECORATIVOS";
      break;
    case "3":
      type = "MUEBLES";
      break;
    case "4":
      type = "MUROS";
      break;
    case "5":
      type = "CABECERAS";
      break;
    case "6":
      type = "TABLAROCA";
      break;
    case "7":
      type = "ISLAS";
      break;
    case "8":
      type = "PLAFON";
      break;
    case "9":
      type = "AISLANTE";
      break;
    default:
      type = "AISLANTE";
      break;
  }
  console.log(type);

  const images = [
    [
      "1_CAJILLO",
      "2_CAJILLO",
      "3_CAJILLO",
      "4_CAJILLO",
      "5_CAJILLO",
      "6_CAJILLO",
      "7_CAJILLO",
      "8_CAJILLO"
    ],
    [
      "1_DECORATIVO",
      "2_DECORATIVO",
      "3_DECORATIVO",
      "4_DECORATIVO",
      "5_DECORATIVO",
      "6_DECORATIVO",
      "7_DECORATIVO",
      "8_DECORATIVO"
    ],
    [
      "1_MUEBLE_TV",
      "2_MUEBLE_TV",
      "3_MUEBLE_TV",
      "4_MUEBLE_TV",
      "5_MUEBLE_TV",
      "6_MUEBLE_TV",
      "7_MUEBLE_TV",
      "8_MUEBLE_TV"
    ],
    [
      "1_MURO_DECORATIVO",
      "2_MURO_DECORATIVO",
      "3_MURO_DECORATIVO",
      "4_MURO_DECORATIVO",
      "5_MURO_DECORATIVO",
      "6_MURO_DECORATIVO",
      "7_MURO_DECORATIVO",
      "8_MURO_DECORATIVO"
    ],
    [
      "1_CABECERA",
      "2_CABECERA",
      "3_CABECERA",
      "4_CABECERA",
      "5_CABECERA",
      "6_CABECERA",
      "7_CABECERA",
      "8_CABECERA"
    ],
    ["1_exterior", "2_exterior", "3_exterior", "4_exterior"],
    [
      "1_BARRA",
      "2_BARRA",
      "3_BARRA",
      "4_BARRA",
      "5_BARRA",
      "6_BARRA",
      "7_BARRA",
      "8_BARRA"
    ],
    [
      "1_REGISTRABLE",
      "2_REGISTRABLE",
      "3_REGISTRABLE",
      "4_REGISTRABLE",
      "5_REGISTRABLE",
      "6_REGISTRABLE",
      "7_REGISTRABLE",
      "8_REGISTRABLE"
    ],
    ["1_aislante", "2_aislante", "3_aislante", "4_aislante"]
  ];

  for (let index = 0; index < images[indexPage - 1].length; index++) {
    const filename = images[indexPage - 1][index];
    const div = document.createElement("div");
    div.classList.add("img-galeria");
    div.setAttribute("data-toggle", "modal");
    div.setAttribute("data-target", "#exampleModalCenter");
    div.setAttribute("data-whatever", `${index}`);
    const img = document.createElement("img");
    img.src = `../images/FOTOS_SECCION_GALERIA/${type}/${filename}.jpg`;
    div.append(img);
    galeria.append(div);
  }

  $("#exampleModalCenter").on("show.bs.modal", function(event) {
    const button = $(event.relatedTarget); // Button that triggered the modal
    const index = button.data("whatever"); // Extract info from data-* attributes
    const filename = images[indexPage - 1][index];
    currentModalIndex = index;
    document
      .getElementById("img-modal")
      .setAttribute(
        "src",
        `../images/FOTOS_SECCION_GALERIA/${type}/${filename}.jpg`
      );
  });

  function transitionModal(action) {
    if (
      action === "next" &&
      currentModalIndex < images[indexPage - 1].length - 1
    ) {
      currentModalIndex++;
    } else if (action === "back" && currentModalIndex > 0) {
      currentModalIndex--;
    }
    const filename = images[indexPage - 1][currentModalIndex];

    document
      .getElementById("img-modal")
      .setAttribute(
        "src",
        `../images/FOTOS_SECCION_GALERIA/${type}/${filename}.jpg`
      );
  }
};
