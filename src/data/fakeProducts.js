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
    rawg_id: 4265,
  },
  {
    id: uuidv4(),
    title: "Shin Megami Tensei III: Nocturne",
    rawg_id: 3703,
  },
  {
    id: uuidv4(),
    title: "Catherine",
    rawg_id: 4466,
  },
  {
    id: uuidv4(),
    title: "Kusan: City of Wolves",
    rawg_id: 641514,
  },
  {
    id: uuidv4(),
    title: "Etrian Odyssey III HD",
    rawg_id: 961652,
  },
  {
    id: uuidv4(),
    title: "Grand Theft Auto V",
    rawg_id: 3498,
  },
  {
    id: uuidv4(),
    title: "Left 4 Dead 2",
    rawg_id: 12020,
  },
  {
    id: uuidv4(),
    title: "Red Dead Redemption 2",
    rawg_id: 28,
  },
  {
    id: uuidv4(),
    title: "Avowed",
    rawg_id: 471025,
  },
  {
    id: uuidv4(),
    title: "Oxygen Not Included",
    rawg_id: 9880,
  },
  {
    id: uuidv4(),
    title: "Palword",
    rawg_id: 718135,
  },
  {
    id: uuidv4(),
    title: "Bomb Rush Cyberfunk",
    rawg_id: 471018,
  },
  {
    id: uuidv4(),
    title: "Minecraft Dungeons",
    rawg_id: 257195,
  },
  {
    id: uuidv4(),
    title: "Armored Core VI Fires of Rubicon",
    rawg_id: 892902,
  },
  {
    id: uuidv4(),
    title: "Tekken 8",
    rawg_id: 850705,
  },
  {
    id: uuidv4(),
    title: "Pacific Drive",
    rawg_id: 850702,
  },
  {
    id: uuidv4(),
    title: "Mortal Kombat 1",
    rawg_id: 960873,
  },
];

const carouselFakeProducts = [
  {
    id: uuidv4(),
    title: "Red Dead Redemption 2",
    rawg_id: 28,
    // data: fetchDataByID(28),
  },
  {
    id: uuidv4(),
    title: "Tekken 8",
    rawg_id: 850705,
    // data: fetchDataByID(850705),
  },
  {
    id: uuidv4(),
    title: "Pacific Drive",
    rawg_id: 850702,
    // data: fetchDataByID(850702),
  },
  {
    id: uuidv4(),
    title: "Mortal Kombat 1",
    rawg_id: 960873,
    // data: fetchDataByID(960873),
  },
];

const smallCarouselFakeProducts = [
  {
    id: uuidv4(),
    title: "Palword",
    rawg_id: 718135,
  },
  {
    id: uuidv4(),
    title: "Bomb Rush Cyberfunk",
    rawg_id: 471018,
  },
  {
    id: uuidv4(),
    title: "Minecraft Dungeons",
    rawg_id: 257195,
  },
  {
    id: uuidv4(),
    title: "Armored Core VI Fires of Rubicon",
    rawg_id: 892902,
  },
  {
    id: uuidv4(),
    title: "Red Dead Redemption 2",
    rawg_id: 28,
    // data: fetchDataByID(28),
  },
  {
    id: uuidv4(),
    title: "Tekken 8",
    rawg_id: 850705,
    // data: fetchDataByID(850705),
  },
  {
    id: uuidv4(),
    title: "Pacific Drive",
    rawg_id: 850702,
    // data: fetchDataByID(850702),
  },
  {
    id: uuidv4(),
    title: "Mortal Kombat 1",
    rawg_id: 960873,
    // data: fetchDataByID(960873),
  },
];

export default {
  allFakeProducts,
  carouselFakeProducts,
  smallCarouselFakeProducts,
};
