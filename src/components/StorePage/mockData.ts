export interface CommonType {
  title: string;
  imgSrc: string;
  price: number;
}

export interface ProcessorsType extends CommonType {
  subTitle: string;
}

export type GraphicCardType = Omit<CommonType, "imgSrc">;

export const headerTitles: string[] = [
  "Processor type",
  "Choose an enclosure",
  "Choose a processor",
  "Graphics Card",
  "Select a drive",
  "Select RAM",
  "Choose a motherboard",
  "Additional CPU cooling",
  "Select a second drive (optional)",
  "Choose a power adapter",
  "Summary",
];

export const processors: ProcessorsType[] = [
  {
    title: "Intel + DDR4",
    subTitle: "Generation 12",
    imgSrc: "assets/processors/intel_logo.png",
    price: 2500,
  },
  {
    title: "Intel + DDR4",
    subTitle: "Generation 13",
    imgSrc: "assets/processors/intel_logo.png",
    price: 2540,
  },
  {
    title: "AMD + DDR4",
    subTitle: "5000 series",
    imgSrc: "assets/processors/amd_logo.png",
    price: 2000,
  },
  {
    title: "Intel + DDR5",
    subTitle: "Generation 12",
    imgSrc: "assets/processors/intel_logo.png",
    price: 1000,
  },
  {
    title: "Intel + DDR5",
    subTitle: "Generation 13",
    imgSrc: "assets/processors/intel_logo.png",
    price: 1400,
  },
  {
    title: "AMD + DDR5",
    subTitle: "7000 series",
    imgSrc: "assets/processors/amd_logo.png",
    price: 1800,
  },
  {
    title: "Intel + DDR4",
    subTitle: "Generation 10/11",
    imgSrc: "assets/processors/intel_logo.png",
    price: 2500,
  },
];

export const cases: CommonType[] = [
  {
    title: "Signum 300 Solid",
    imgSrc: "assets/cases/krux_astral.png",
    price: 230,
  },
  {
    title: "KRUX Astral",
    imgSrc: "assets/cases/krux-orio.png",
    price: 220,
  },
  {
    title: "Krux Orio",
    imgSrc: "assets/cases/nzxt-elite-h510-black.png",
    price: 250,
  },
  {
    title: "Signum 300 Core",
    imgSrc: "assets/cases/signum-300-air.png",
    price: 210,
  },
  {
    title: "Signum 300 ARGB",
    imgSrc: "assets/cases/signum-300-argb.png",
    price: 270,
  },
  {
    title: "NZXT H510 Elite",
    imgSrc: "assets/cases/signum-300-solid.png",
    price: 570,
  },
];

export const chips: CommonType[] = [
  {
    title: "i3-12100F",
    imgSrc: "assets/chips/12400f.jpg",
    price: 499,
  },
  {
    title: "i5-12400F",
    imgSrc: "assets/chips/12500.jpeg",
    price: 599,
  },
  {
    title: "i5-12500",
    imgSrc: "assets/chips/12600.png",
    price: 1200,
  },
  {
    title: "i5-12600KF",
    imgSrc: "assets/chips/12600KF.png",
    price: 1339,
  },
  {
    title: "i7-12700F",
    imgSrc: "assets/chips/12600KF.png",
    price: 1579,
  },
  {
    title: "i7-12700KF",
    imgSrc: "assets/chips/12900KF.png",
    price: 1699,
  },
  {
    title: "i9-12900F",
    imgSrc: "assets/chips/12900f.jpg",
    price: 1339,
  },
  {
    title: "i9-12900KF",
    imgSrc: "assets/chips/12700KF.png",
    price: 1200,
  },
];

export const coolers: CommonType[] = [
  {
    title: "MasterLiquid ML240L RGB",
    imgSrc: "assets/coolers/master-liquid-240-rgb.jpeg",
    price: 600,
  },
  {
    title: "Pure Loop 240mm",
    imgSrc: "assets/coolers/master-liquid-240.jpeg",
    price: 819,
  },
  {
    title: "Pure Loop 2 FX 240",
    imgSrc: "assets/coolers/kraken-x53-rgb.jpeg",
    price: 475,
  },
  {
    title: "Kraken X53 240mm RGB",
    imgSrc:
      "assets/coolers/cooler-master-masterliquid-ml240l-v2-rgb-white-2x120mm.jpeg",
    price: 499,
  },
];

export const graphicCards: GraphicCardType[] = [
  {
    title: "Nvidia GeForce GTX 1650 4GB",
    price: 849,
  },
  {
    title: "Nvidia GeForce RTX 3050 8GB",
    price: 1200,
  },
  {
    title: "Nvidia GeForce RTX 3060 12GB",
    price: 1300,
  },
  {
    title: "Nvidia GeForce RTX 3060 Ti 8GB",
    price: 1545,
  },
  {
    title: "Nvidia GeForce RTX 3070 8GB",
    price: 1656,
  },
  {
    title: "Nvidia GeForce RTX 3070 Ti 8GB",
    price: 1789,
  },
  {
    title: "Nvidia GeForce RTX 4070 Ti 12GB",
    price: 1999,
  },
  {
    title: "Nvidia GeForce RTX 3080 10GB",
    price: 2000,
  },
  {
    title: "Nvidia GeForce RTX 3090 24GB",
    price: 2100,
  },
  {
    title: "Nvidia GeForce RTX 3090 Ti 24GB",
    price: 2199,
  },
  {
    title: "Nvidia GeForce RTX 4080 16GB",
    price: 2399,
  },
  {
    title: "Nvidia GeForce RTX 4090 24GB",
    price: 2499,
  },
];

export const motherboards: CommonType[] = [
  {
    title: "Gigabyte H610M H",
    imgSrc: "assets/motherboards/asus4.jpeg",
    price: 600,
  },
  {
    title: "Gigabyte B660M DS3H AX",
    imgSrc: "assets/motherboards/asus3.jpg",
    price: 1069,
  },
  {
    title: "Gigabyte Z690 UD AX DDR4",
    imgSrc: "assets/motherboards/asus2.jpg",
    price: 1739,
  },
  {
    title: "ASUS TUF GAMING Z690-PLUS WIFI DDR4",
    imgSrc: "assets/motherboards/asus.jpeg",
    price: 1069,
  },
];
