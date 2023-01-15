export interface CommonType {
  title: string;
  imgSrc: string;
  price: number;
}

export interface ProcessorsType extends CommonType {
  subTitle: string;
}

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
