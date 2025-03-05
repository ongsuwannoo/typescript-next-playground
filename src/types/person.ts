export interface IDataPerson {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export interface IDataResponse {
  data: IDataPerson[];
  total: number;
}

export interface IDataResponse2 {
  result: IDataResponse[];
}