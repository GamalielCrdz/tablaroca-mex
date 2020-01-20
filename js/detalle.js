window.onload = async function() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const index = urlParams.get("d");
  const galeria = document.getElementById("galeria");
  let type = "AISLANTE";

  switch (index) {
    case "1":
      type = "AISLANTE";
      break;
    case "2":
      type = "CABECERAS";
      break;
    case "3":
      type = "CAJILLO";
      break;
    case "4":
      type = "DECORATIVOS";
      break;
    case "5":
      type = "ISLAS";
      break;
    case "6":
      type = "MUEBLES";
      break;
    case "7":
      type = "MUROS";
      break;
    case "8":
      type = "PLAFON";
      break;
    case "9":
      type = "TABLAROCA";
      break;
    default:
      type = "AISLANTE";
      break;
  }
  console.log(type);

  const images = [
    ["1_aislante", "2_aislante", "3_aislante", "4_aislante"],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""]
  ];

  for (const filename of images[index - 1]) {
    const div = document.createElement("div");
    div.classList.add("img-galeria");
    const img = document.createElement("img");
    img.src = `../images/FOTOS_SECCION_GALERIA/${type}/${filename}.jpg`;
    div.append(img);
    galeria.append(div);
  }
};
