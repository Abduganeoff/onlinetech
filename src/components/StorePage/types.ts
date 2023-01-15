import {
  CommonType,
  ListPanelType,
  ProcessorsType,
  CardType,
  CardBasicType,
} from "./mockData";

export type DataType =
  | ProcessorsType[]
  | CommonType[]
  | ListPanelType[]
  | CardType[]
  | CardBasicType[];
