import { v4 as uuidv4 } from "uuid";

const fetchDataByID = async (id) => {
  let data = await fetch(
    `https://api.rawg.io/api/games/${id}?key=b1bdefa312de4f75971ad12320c8a711`,
  );

  data = await data.json();

  return data;
};

const allFakeProducts = [
  {
    id: uuidv4(),
    title: "Persona 3 Portable",
    price: "R$ 999,90",
    rawg_id: 4265,
  },
  {
    id: uuidv4(),
    title: "Shin Megami Tensei III: Nocturne",
    price: "R$ 179,90",
    rawg_id: 3703,
  },
  {
    id: uuidv4(),
    title: "Catherine",
    price: "R$ 199,90",
    rawg_id: 4466,
  },
  {
    id: uuidv4(),
    title: "Kusan: City of Wolves",
    price: "R$ 79,90",
    rawg_id: 641514,
  },
  {
    id: uuidv4(),
    title: "Etrian Odyssey III HD",
    price: "R$ 100,90",
    rawg_id: 961652,
  },
  {
    id: uuidv4(),
    title: "Grand Theft Auto V",
    price: "R$40,90",
    rawg_id: 3498,
  },
  {
    id: uuidv4(),
    title: "Left 4 Dead 2",
    price: "R$ 29,90",
    rawg_id: 12020,
  },
  {
    id: uuidv4(),
    title: "Red Dead Redemption 2",
    price: "R$ 299,90",
    rawg_id: 28,
  },
  {
    id: uuidv4(),
    title: "Avowed",
    price: "R$ 299,90",
    rawg_id: 471025,
  },
  {
    id: uuidv4(),
    title: "Oxygen Not Included",
    price: "R$ 50,90",
    rawg_id: 9880,
  },
  {
    id: uuidv4(),
    title: "Palword",
    price: "R$ 199,90",
    rawg_id: 718135,
  },
  {
    id: uuidv4(),
    title: "Bomb Rush Cyberfunk",
    price: "R$ 107,90",
    rawg_id: 471018,
  },
  {
    id: uuidv4(),
    title: "Minecraft Dungeons",
    price: "R$ 74,95",
    rawg_id: 257195,
  },
  {
    id: uuidv4(),
    title: "Armored Core VI Fires of Rubicon",
    price: "R$ 257,90",
    rawg_id: 892902,
  },
  {
    id: uuidv4(),
    title: "Tekken 8",
    price: "R$ 299,90",
    rawg_id: 850705,
  },
  {
    id: uuidv4(),
    title: "Pacific Drive",
    price: "R$ 80,90",
    rawg_id: 850702,
  },
  {
    id: uuidv4(),
    title: "Mortal Kombat 1",
    price: "R$ 299,90",
    rawg_id: 960873,
  },
];

const carouselFakeProducts = [
  {
    id: uuidv4(),
    title: "Red Dead Redemption 2",
    price: "R$ 299,90",
    rawg_id: 28,
  },
  {
    id: uuidv4(),
    title: "Tekken 8",
    price: "R$ 299,90",
    rawg_id: 850705,
  },
  {
    id: uuidv4(),
    title: "Pacific Drive",
    price: "R$ 80,90",
    rawg_id: 850702,
  },
  {
    id: uuidv4(),
    title: "Mortal Kombat 1",
    price: "R$ 299,90",
    rawg_id: 960873,
  },
];

const smallCarouselFakeProducts = [
  {
    id: uuidv4(),
    title: "Persona 3 Portable",
    price: "R$ 999,90",
    rawg_id: 4265,
  },
  {
    id: uuidv4(),
    title: "Grand Theft Auto V",
    price: "R$40,90",
    rawg_id: 3498,
  },
  {
    id: uuidv4(),
    title: "Bomb Rush Cyberfunk",
    price: "R$ 107,90",
    rawg_id: 471018,
  },
  {
    id: uuidv4(),
    title: "Minecraft Dungeons",
    price: "R$ 74,95",
    rawg_id: 257195,
  },
  {
    id: uuidv4(),
    title: "Armored Core VI Fires of Rubicon",
    price: "R$ 257,90",
    rawg_id: 892902,
  },
  {
    id: uuidv4(),
    title: "Red Dead Redemption 2",
    price: "R$ 299,90",
    rawg_id: 28,
  },
  {
    id: uuidv4(),
    title: "Tekken 8",
    price: "R$ 299,90",
    rawg_id: 850705,
  },
  {
    id: uuidv4(),
    title: "Avowed",
    price: "R$ 299,90",
    rawg_id: 471025,
  },
];

export default {
  allFakeProducts,
  carouselFakeProducts,
  smallCarouselFakeProducts,
};
