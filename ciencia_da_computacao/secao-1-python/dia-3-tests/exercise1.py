#  Exercício 1: Escreva um programa que retorne uma lista com
#  os valores numéricos de 1 a N, mas com as seguintes exceções:

# Números divisíveis por 3 deve aparecer como “Fizz” ao invés do número;

# Números divisíveis por 5 devem aparecer como “Buzz” ao invés do número;

# Números divisíveis por 3 e 5 devem aparecer como “FizzBuzz”.

# Exemplo: 3 -> [1, 2, "Fizz"].


def fizz_buzz_converter(n):
    if (n % 3) == 0 and (n % 5) == 0:
        return "FizzBuzz"
    elif n % 3 == 0:
        return "Fizz"
    elif n % 5 == 0:
        return "Buzz"
    return n


def converter(num):
    arr = []
    for n in range(num):
        arr.append(n + 1)
    converted = list(map(fizz_buzz_converter, arr))
    print(converted)


converter(15)
