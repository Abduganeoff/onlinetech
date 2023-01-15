export interface CommonType {
  id: number;
  title: string;
  imgSrc: string;
  price: number;
  checked: boolean;
}

export interface ProcessorsType extends CommonType {
  subTitle: string;
}

export type ListPanelType = Omit<CommonType, "imgSrc">;

export type CardType = Omit<CommonType, "imgSrc"> & { subTitle: string };

export type CardBasicType = Omit<CommonType, "imgSrc">;

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
    checked: false,
    id: 1,
  },
  {
    title: "Intel + DDR4",
    subTitle: "Generation 13",
    imgSrc: "assets/processors/intel_logo.png",
    price: 2540,
    checked: false,
    id: 2,
  },
  {
    title: "AMD + DDR4",
    subTitle: "5000 series",
    imgSrc: "assets/processors/amd_logo.png",
    price: 2000,
    checked: false,
    id: 3,
  },
  {
    title: "Intel + DDR5",
    subTitle: "Generation 12",
    imgSrc: "assets/processors/intel_logo.png",
    price: 1000,
    checked: false,
    id: 4,
  },
  {
    title: "Intel + DDR5",
    subTitle: "Generation 13",
    imgSrc: "assets/processors/intel_logo.png",
    price: 1400,
    checked: false,
    id: 5,
  },
  {
    title: "AMD + DDR5",
    subTitle: "7000 series",
    imgSrc: "assets/processors/amd_logo.png",
    price: 1800,
    checked: false,
    id: 6,
  },
  {
    title: "Intel + DDR4",
    subTitle: "Generation 10/11",
    imgSrc: "assets/processors/intel_logo.png",
    price: 2500,
    checked: false,
    id: 7,
  },
];

export const cases: CommonType[] = [
  {
    title: "Signum 300 Solid",
    imgSrc: "assets/cases/krux_astral.png",
    price: 230,
    checked: false,
    id: 8,
  },
  {
    title: "KRUX Astral",
    imgSrc: "assets/cases/krux-orio.png",
    price: 220,
    checked: false,
    id: 9,
  },
  {
    title: "Krux Orio",
    imgSrc: "assets/cases/nzxt-elite-h510-black.png",
    price: 250,
    checked: false,
    id: 10,
  },
  {
    title: "Signum 300 Core",
    imgSrc: "assets/cases/signum-300-air.png",
    price: 210,
    checked: false,
    id: 11,
  },
  {
    title: "Signum 300 ARGB",
    imgSrc: "assets/cases/signum-300-argb.png",
    price: 270,
    checked: false,
    id: 12,
  },
  {
    title: "NZXT H510 Elite",
    imgSrc: "assets/cases/signum-300-solid.png",
    price: 570,
    checked: false,
    id: 13,
  },
];

export const chips: CommonType[] = [
  {
    title: "i3-12100F",
    imgSrc: "assets/chips/12400f.jpg",
    price: 499,
    checked: false,
    id: 14,
  },
  {
    title: "i5-12400F",
    imgSrc: "assets/chips/12500.jpeg",
    price: 599,
    checked: false,
    id: 15,
  },
  {
    title: "i5-12500",
    imgSrc: "assets/chips/12600.png",
    price: 1200,
    checked: false,
    id: 16,
  },
  {
    title: "i5-12600KF",
    imgSrc: "assets/chips/12600KF.png",
    price: 1339,
    checked: false,
    id: 17,
  },
  {
    title: "i7-12700F",
    imgSrc: "assets/chips/12600KF.png",
    price: 1579,
    checked: false,
    id: 18,
  },
  {
    title: "i7-12700KF",
    imgSrc: "assets/chips/12900KF.png",
    price: 1699,
    checked: false,
    id: 19,
  },
  {
    title: "i9-12900F",
    imgSrc: "assets/chips/12900f.jpg",
    price: 1339,
    checked: false,
    id: 20,
  },
  {
    title: "i9-12900KF",
    imgSrc: "assets/chips/12700KF.png",
    price: 1200,
    checked: false,
    id: 21,
  },
];

export const coolers: CommonType[] = [
  {
    title: "MasterLiquid ML240L RGB",
    imgSrc: "assets/coolers/master-liquid-240-rgb.jpeg",
    price: 600,
    checked: false,
    id: 22,
  },
  {
    title: "Pure Loop 240mm",
    imgSrc: "assets/coolers/master-liquid-240.jpeg",
    price: 819,
    checked: false,
    id: 23,
  },
  {
    title: "Pure Loop 2 FX 240",
    imgSrc: "assets/coolers/kraken-x53-rgb.jpeg",
    price: 475,
    checked: false,
    id: 24,
  },
  {
    title: "Kraken X53 240mm RGB",
    imgSrc:
      "assets/coolers/cooler-master-masterliquid-ml240l-v2-rgb-white-2x120mm.jpeg",
    price: 499,
    checked: false,
    id: 25,
  },
];

export const graphicCards: ListPanelType[] = [
  {
    title: "Nvidia GeForce GTX 1650 4GB",
    price: 849,
    checked: false,
    id: 26,
  },
  {
    title: "Nvidia GeForce RTX 3050 8GB",
    price: 1200,
    checked: false,
    id: 27,
  },
  {
    title: "Nvidia GeForce RTX 3060 12GB",
    price: 1300,
    checked: false,
    id: 28,
  },
  {
    title: "Nvidia GeForce RTX 3060 Ti 8GB",
    price: 1545,
    checked: false,
    id: 29,
  },
  {
    title: "Nvidia GeForce RTX 3070 8GB",
    price: 1656,
    checked: false,
    id: 30,
  },
  {
    title: "Nvidia GeForce RTX 3070 Ti 8GB",
    price: 1789,
    checked: false,
    id: 31,
  },
  {
    title: "Nvidia GeForce RTX 4070 Ti 12GB",
    price: 1999,
    checked: false,
    id: 32,
  },
  {
    title: "Nvidia GeForce RTX 3080 10GB",
    price: 2000,
    checked: false,
    id: 33,
  },
  {
    title: "Nvidia GeForce RTX 3090 24GB",
    price: 2100,
    checked: false,
    id: 34,
  },
  {
    title: "Nvidia GeForce RTX 3090 Ti 24GB",
    price: 2199,
    checked: false,
    id: 35,
  },
  {
    title: "Nvidia GeForce RTX 4080 16GB",
    price: 2399,
    checked: false,
    id: 36,
  },
  {
    title: "Nvidia GeForce RTX 4090 24GB",
    price: 2499,
    checked: false,
    id: 37,
  },
];

export const motherboards: CommonType[] = [
  {
    title: "Gigabyte H610M H",
    imgSrc: "assets/motherboards/asus4.jpeg",
    price: 600,
    checked: false,
    id: 38,
  },
  {
    title: "Gigabyte B660M DS3H AX",
    imgSrc: "assets/motherboards/asus3.jpg",
    price: 1069,
    checked: false,
    id: 39,
  },
  {
    title: "Gigabyte Z690 UD AX DDR4",
    imgSrc: "assets/motherboards/asus2.jpg",
    price: 1739,
    checked: false,
    id: 40,
  },
  {
    title: "ASUS TUF GAMING Z690-PLUS WIFI DDR4",
    imgSrc: "assets/motherboards/asus.jpeg",
    price: 1069,
    checked: false,
    id: 41,
  },
];

export const chargers: ListPanelType[] = [
  {
    title: "450W 80 Plus",
    price: 200,
    checked: false,
    id: 42,
  },
  {
    title: "500W 80 Plus Bronze",
    price: 250,
    checked: false,
    id: 43,
  },
  {
    title: "550W 80 Plus",
    price: 350,
    checked: false,
    id: 44,
  },
  {
    title: "600W 80 Plus Bronze",
    price: 300,
    checked: false,
    id: 45,
  },
  {
    title: "700W 80 Plus Bronze",
    price: 400,
    checked: false,
    id: 46,
  },
  {
    title: "750W 80 Plus Gold",
    price: 450,
    checked: false,
    id: 47,
  },
  {
    title: "850W 80 Plus Gold",
    price: 500,
    checked: false,
    id: 48,
  },
];

export const disks: CardType[] = [
  {
    title: "SSD 250GB",
    subTitle: "M.2 NVMe 3300MB/s",
    price: 149,
    checked: false,
    id: 49,
  },
  {
    title: "SSD 500GB",
    subTitle: "M.2 NVMe 3300MB/s",
    price: 250,
    checked: false,
    id: 50,
  },
  {
    title: "SSD 1TB",
    subTitle: "M.2 NVMe 3300MB/s",
    price: 350,
    checked: false,
    id: 51,
  },
  {
    title: "SSD 500GB",
    subTitle: "M.2 NVMe 3300MB/s",
    price: 399,
    checked: false,
    id: 52,
  },
  {
    title: "SSD 1TB",
    subTitle: "M.2 NVMe 5000MB/s",
    price: 499,
    checked: false,
    id: 53,
  },
  {
    title: "SSD 2TB",
    subTitle: "M.2 NVMe 5000MB/s",
    price: 599,
    checked: false,
    id: 54,
  },
  {
    title: "SSD 500GB",
    subTitle: "M.2 NVMe 7000MB/s",
    price: 556,
    checked: false,
    id: 55,
  },
  {
    title: "SSD 1TB",
    subTitle: "M.2 NVMe 7000MB/s",
    price: 145,
    checked: false,
    id: 56,
  },
];

export const rams: CardType[] = [
  {
    title: "8GB (1x8GB)",
    subTitle: "DDR4 3200MHz CL16",
    price: 240,
    checked: false,
    id: 57,
  },
  {
    title: "16GB (2x8GB)",
    subTitle: "DDR4 3200MHz CL16",
    price: 250,
    checked: false,
    id: 58,
  },
  {
    title: "16GB ( 2x8GB ) RGB",
    subTitle: "DDR4 3200MHz CL16",
    price: 350,
    checked: false,
    id: 59,
  },
  {
    title: "32GB (2x16GB)",
    subTitle: "DDR4 3200MHz CL16",
    price: 399,
    checked: false,
    id: 60,
  },
  {
    title: "32GB ( 2x16GB ) RGB",
    subTitle: "DDR4 3200MHz CL16",
    price: 499,
    checked: false,
    id: 61,
  },
  {
    title: "64GB (4x16GB)",
    subTitle: "DDR4 3200MHz CL16",
    price: 599,
    checked: false,
    id: 62,
  },
  {
    title: "64GB ( 4x16GB ) RGB",
    subTitle: "DDR4 3200MHz CL16",
    price: 556,
    checked: false,
    id: 63,
  },
];

export const secondDisks: CardBasicType[] = [
  {
    title: "SSD 1TB",
    price: 349,
    checked: false,
    id: 64,
  },
  {
    title: "HDD 1TB",
    price: 250,
    checked: false,
    id: 65,
  },
  {
    title: "2TB SSD",
    price: 350,
    checked: false,
    id: 66,
  },
  {
    title: "HDD 2TB",
    price: 499,
    checked: false,
    id: 67,
  },
  {
    title: "SSD 4TB",
    price: 199,
    checked: false,
    id: 68,
  },
  {
    title: "HDD 4TB",
    price: 200,
    checked: false,
    id: 69,
  },
];
