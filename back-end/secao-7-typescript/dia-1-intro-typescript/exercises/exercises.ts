export function greeter(name: string): string {
  return `Olá ${name}`;
}

export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function calculateDiamondArea(diagonal1: number, diagonal2: number): number {
  return (diagonal1 * diagonal2) / 2;
}

export function calculateTrapezeArea(base1: number, base2: number, height: number): number {
  return ((base1 + base2) * height) / 2;
}

export function calculateCircleArea(radius: number): number {
  const pi = 3.14;
  return pi * (radius ** 2);
}
