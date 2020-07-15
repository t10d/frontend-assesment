const numbers = [
  "A",
  "K",
  "Q",
  "J",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
];
const naipes = ["C", "D", "H", "S"];

export const validation = {
  min: 2,
  max: 3,
  required: true,
  validate: (value: string) => true,
};
