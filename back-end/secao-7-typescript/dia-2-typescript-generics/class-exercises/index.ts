// Type Aliases
type Bird = {
  habitat: string;
  avgWeight: number;
  avgHeight: number;
};

type Sum = (x: number, y: number) => number;

type Address = {
  street: string;
  number: number;
  district: string;
  zipCode: number;
};

// Type Unions
type StatesOfMatter = "solid" | "liquid" | "gaseous";

type IdNumber = string | number;

type OperationalSystem = "linux" | "mac" | "windows";

type Vowels = "A" | "E" | "I" | "O" | "U";
