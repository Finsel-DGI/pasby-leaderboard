export interface Board {
  nin: string;
  points: number;
  tries: number;
  naming: {
    given: string;
    family: string;
  };
}
