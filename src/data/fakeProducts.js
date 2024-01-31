import { v4 as uuidv4 } from "uuid";

const fetchDataByID = async (id) => {
  let data = await fetch(
    `https://api.rawg.io/api/games/${id}?key=b1bdefa312de4f75971ad12320c8a711`,
  );

  data = await data.json();

  return data;
};

const xboxProducts = [
  {
    id: uuidv4(),
    title: "Assinatura Xbox Game Pass Core: 3 Meses",
    price: "R$ 85.99",
    img: "https://www.muitojogo.com.br/wp-content/uploads/2020/10/Assinatura-Xbox-Live-Gold-3-Meses.png",
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Assinatura Xbox Game Pass Core: 12 Meses",
    price: "R$ 199.90",
    img: "https://www.muitojogo.com.br/wp-content/uploads/2020/10/Assinatura-Xbox-Live-Gold-12-Meses.png",
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "R$200 - Cartão Presente Xbox",
    price: "R$ 200.00",
    img: "https://www.muitojogo.com.br/wp-content/uploads/2021/05/Cartao-Presente-do-Xbox-200-reais.png",
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "R$70 - Cartão Presente Xbox",
    price: "R$ 70.00",
    img: "https://www.muitojogo.com.br/wp-content/uploads/2022/08/Cartao-Presente-do-Xbox-70-reais.png",
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "R$60 - Cartão Presente Xbox",
    price: "R$ 60.00",
    img: "https://www.muitojogo.com.br/wp-content/uploads/2022/08/Cartao-Presente-do-Xbox-60-reais.png",
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "R$50 - Cartão Presente Xbox",
    price: "R$ 50.00",
    img: "https://www.muitojogo.com.br/wp-content/uploads/2021/05/Cartao-Presente-do-Xbox-50-reais.png",
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "R$40 - Cartão Presente Xbox",
    price: "R$ 40.00",
    img: "https://www.muitojogo.com.br/wp-content/uploads/2021/04/Cartao-Presente-do-Xbox-40-reais.png",
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "R$25 - Cartão Presente Xbox",
    price: "R$ 25.00",
    img: "https://www.muitojogo.com.br/wp-content/uploads/2022/08/Cartao-Presente-do-Xbox-25-reais.png",
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "R$20 - Cartão Presente Xbox",
    price: "R$ 20.00",
    img: "https://www.muitojogo.com.br/wp-content/uploads/2022/08/Cartao-Presente-do-Xbox-20-reais.png",
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "R$15 - Cartão Presente Xbox",
    price: "R$ 15.00",
    img: "https://www.muitojogo.com.br/wp-content/uploads/2022/08/Cartao-Presente-do-Xbox-15-reais.png",
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "R$5 - Cartão Presente Xbox",
    price: "R$ 5.00",
    img: "https://www.muitojogo.com.br/wp-content/uploads/2022/06/Cartao-Presente-do-Xbox-5-reais.png",
    inCart: false,
  },
];

const playstationProducts = [
  {
    id: uuidv4(),
    title: "Plus: 3 Meses de Assinatura - Digital [Exclusivo Brasil]",
    price: "R$ 84.90",
    img: "https://www.muitojogo.com.br/wp-content/uploads/2020/10/Playstation-3-meses.png",
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Plus: 12 Meses de Assinatura - Digital [Exclusivo Brasil]",
    price: "R$ 199.90",
    img: "https://www.muitojogo.com.br/wp-content/uploads/2020/10/Playstation-12-meses.png",
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "R$250 - Cartão Presente Playstation Store",
    price: "R$ 250.00",
    img: "https://www.muitojogo.com.br/wp-content/uploads/2021/04/Playstation-R250.jpg",
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "R$100 - Cartão Presente Playstation Store",
    price: "R$ 100.00",
    img: "https://www.muitojogo.com.br/wp-content/uploads/2021/04/Playstation-R100.jpg",
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "R$60 - Cartão Presente Playstation Store",
    price: "R$ 60.00",
    img: "https://www.muitojogo.com.br/wp-content/uploads/2021/04/Playstation-R60.jpg",
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "R$30 - Cartão Presente Playstation Store",
    price: "R$ 30.00",
    img: "https://www.muitojogo.com.br/wp-content/uploads/2021/04/Playstation-R30.jpg",
    inCart: false,
  },
];

const allFakeProducts = [
  {
    id: uuidv4(),
    title: "Persona 3 Portable",
    price: "R$ 999.90",
    rawg_id: 4265,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Shin Megami Tensei III: Nocturne",
    price: "R$ 179.90",
    rawg_id: 3703,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Kusan: City of Wolves",
    price: "R$ 79.90",
    rawg_id: 641514,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Etrian Odyssey III HD",
    price: "R$ 100.90",
    rawg_id: 961652,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Grand Theft Auto V",
    price: "R$40.90",
    rawg_id: 3498,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Left 4 Dead 2",
    price: "R$ 29.90",
    rawg_id: 12020,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Red Dead Redemption 2",
    price: "R$ 299.90",
    rawg_id: 28,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Avowed",
    price: "R$ 299.90",
    rawg_id: 471025,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Oxygen Not Included",
    price: "R$ 50.90",
    rawg_id: 9880,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Palword",
    price: "R$ 199.90",
    rawg_id: 718135,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Bomb Rush Cyberfunk",
    price: "R$ 107.90",
    rawg_id: 471018,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Minecraft Dungeons",
    price: "R$ 74.95",
    rawg_id: 257195,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Armored Core VI Fires of Rubicon",
    price: "R$ 257.90",
    rawg_id: 892902,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Tekken 8",
    price: "R$ 299.90",
    rawg_id: 850705,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Pacific Drive",
    price: "R$ 80.90",
    rawg_id: 850702,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Mortal Kombat 1",
    price: "R$ 299.90",
    rawg_id: 960873,
    inCart: false,
  },
];

const carouselFakeProducts = [
  {
    id: uuidv4(),
    title: "Red Dead Redemption 2",
    price: "R$ 299.90",
    rawg_id: 28,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Tekken 8",
    price: "R$ 299.90",
    rawg_id: 850705,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Pacific Drive",
    price: "R$ 80.90",
    rawg_id: 850702,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Mortal Kombat 1",
    price: "R$ 299.90",
    rawg_id: 960873,
    inCart: false,
  },
];

const smallCarouselFakeProducts = [
  {
    id: uuidv4(),
    title: "Persona 3 Portable",
    price: "R$ 999,90",
    rawg_id: 4265,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Grand Theft Auto V",
    price: "R$ 40,90",
    rawg_id: 3498,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Bomb Rush Cyberfunk",
    price: "R$ 107,90",
    rawg_id: 471018,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Minecraft Dungeons",
    price: "R$ 74,95",
    rawg_id: 257195,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Armored Core VI Fires of Rubicon",
    price: "R$ 257,90",
    rawg_id: 892902,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Red Dead Redemption 2",
    price: "R$ 299,90",
    rawg_id: 28,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Tekken 8",
    price: "R$ 299,90",
    rawg_id: 850705,
    inCart: false,
  },
  {
    id: uuidv4(),
    title: "Avowed",
    price: "R$ 299,90",
    rawg_id: 471025,
    inCart: false,
  },
];

export default {
  allFakeProducts,
  carouselFakeProducts,
  smallCarouselFakeProducts,
  playstationProducts,
  xboxProducts,
};
