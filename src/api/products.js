const _products = [
  {
    id: 1,
    product: "окна",
    type: "1-створчатые",
    width: 900,
    height: 1400,
    minWidth: 500,
    maxWidth: 1500,
    minHeight: 0,
    maxHeight: 1800,
    iconSrc: "w_1_1.png",
    imgSrc: "i_1_1.png",
    systems: {
      "Blitz new": 4941,
      Thermo: 5231,
      Grazio: 5746,
      Delight: 6221,
      Brilliant: 6489,
      Intelio: 7470,
      Geneo: 15572,
    },
  },
  {
    id: 2,
    product: "окна",
    type: "1-створчатые",
    width: 900,
    height: 1400,
    minWidth: 500,
    maxWidth: 1500,
    minHeight: 0,
    maxHeight: 1800,
    iconSrc: "w_1_2.png",
    imgSrc: "i_1_2.png",
    systems: {
      "Blitz new": 4940,
      Thermo: 5231,
      Grazio: 5746,
      Delight: 6221,
      Brilliant: 6489,
      Intelio: 7470,
      Geneo: 15570,
    },
  },
  {
    id: 3,
    product: "окна",
    type: "1-створчатые",
    width: 900,
    height: 1400,
    minWidth: 500,
    maxWidth: 1500,
    minHeight: 0,
    maxHeight: 1800,
    iconSrc: "w_1_3.png",
    imgSrc: "i_1_3.png",
    systems: {
      "Blitz new": 4940,
      Thermo: 5231,
      Grazio: 5746,
      Delight: 6221,
      Brilliant: 6489,
      Intelio: 7470,
      Geneo: 15570,
    },
  },
  {
    id: 3,
    product: "окна",
    type: "2-створчатые",
    width: 900,
    height: 1400,
    minWidth: 500,
    maxWidth: 1500,
    minHeight: 0,
    maxHeight: 1800,
    iconSrc: "w_1_1.png",
    imgSrc: "i_1_1.png",
    systems: {
      "Blitz new": 4940,
      Thermo: 5231,
      Grazio: 5746,
      Delight: 6221,
      Brilliant: 6489,
      Intelio: 7470,
      Geneo: 15570,
    },
  },
  {
    id: 4,
    product: "окна",
    type: "3-створчатые",
    width: 900,
    height: 1400,
    minWidth: 500,
    maxWidth: 1500,
    minHeight: 0,
    maxHeight: 1800,
    iconSrc: "w_1_1.png",
    imgSrc: "i_1_1.png",
    systems: {
      "Blitz new": 4949,
      Thermo: 5231,
      Grazio: 5746,
      Delight: 6221,
      Brilliant: 6489,
      Intelio: 7470,
      Geneo: 15570,
    },
  },
  {
    id: 5,
    product: "окна",
    type: "4-створчатые",
    width: 900,
    height: 1400,
    minWidth: 500,
    maxWidth: 1500,
    minHeight: 0,
    maxHeight: 1800,
    iconSrc: "w_1_1.png",
    imgSrc: "i_1_1.png",
    systems: {
      "Blitz new": 4945,
      Thermo: 5231,
      Grazio: 5746,
      Delight: 6221,
      Brilliant: 6489,
      Intelio: 7470,
      Geneo: 15570,
    },
  },
  {
    id: 6,
    product: "двери",
    type: "балконные двери",
    width: 900,
    height: 1400,
    minWidth: 500,
    maxWidth: 1500,
    minHeight: 0,
    maxHeight: 1800,
    iconSrc: "w_1_1.png",
    imgSrc: "i_1_1.png",
    systems: {
      "Blitz new": 4940,
      Thermo: 5231,
      Grazio: 5746,
      Delight: 6221,
      Brilliant: 6489,
      Intelio: 7470,
      Geneo: 15570,
    },
  },
  {
    id: 7,
    product: "двери",
    type: "балконные блоки",
    width: 900,
    height: 1400,
    minWidth: 500,
    maxWidth: 1500,
    minHeight: 0,
    maxHeight: 1800,
    iconSrc: "w_1_1.png",
    imgSrc: "i_1_1.png",
    systems: {
      "Blitz new": 4940,
      Thermo: 5231,
      Grazio: 5746,
      Delight: 6221,
      Brilliant: 6489,
      Intelio: 7470,
      Geneo: 15570,
    },
  },
];

const _params = [
  {
    id: 1,
    product: "Стеклопакет",
    value: {
      "0": "стандартный",
      "5": "теплосберегающий",
      "10": "шумозащитный",
      "15": "солнцезащитный",
    },
  },
  {
    id: 2,
    product: "Ширина подоконника",
    value: {
      "0": "нет",
      "166": "150 мм (ПВХ) белый",
      "252": "250 мм (ПВХ) белый",
      "339": "350 мм (ПВХ) белый",
      "426": "450 мм (ПВХ) белый",
      "512": "550 мм (ПВХ) белый",
    },
  },
  {
    id: 3,
    product: "Ширина отлива",
    value: {
      "0": "нет",
      "103": "менее 100 мм",
      "170": "100-150 мм",
      "227": "200-250 мм",
      "300": "250-400 мм",
    },
  },
  {
    id: 4,
    product: "Ламинация",
    value: {
      "15": "односторонняя",
      "30": "двухсторонняя",
    },
  },
];

export default {
  async getProducts() {
    await wait(100);

    return _products;
  },

  async getParams() {
    await wait(100);

    return _params;
  },

  async buyProducts(products) {
    console.log(products);
    await wait(100);

    if (
      // simulate random checkout failure.
      Math.random() > 0.5 ||
      navigator.webdriver
    ) {
      return;
    } else {
      throw new Error("Checkout error");
    }
  },
};

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
