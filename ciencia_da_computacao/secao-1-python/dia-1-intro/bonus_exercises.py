# Exercício 1: Dada uma lista, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.


def smaller_num(list):
    smallest = 0
    for num in list:
        if num < smallest:
            smallest = num
    return smallest


# Exercício 2: Faça um programa que, dado um valor n qualquer,
# tal que n > 1, imprima na tela um triângulo retângulo
# com n asteriscos de base.
# Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base:


def make_triangle(size):
    stars = 1
    while stars <= size:
        print(stars * "*")
        stars += 1


make_triangle(5)

# Exercício 3: Crie uma função que receba um número inteiro N
# e retorne o somatório de todos os números de 1 até N. Por exemplo,
# para N = 5,
# o valor esperado será 15.


def factorial(num):
    counter = 1
    factorial = 0
    while counter <= num:
        factorial += counter
        counter += 1
    print(factorial)


factorial(5)

# Exercício 4: Um posto está vendendo combustíveis com a
# seguinte tabela de descontos:

#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.

# Escreva uma função que receba o número de litros vendidos,
# o tipo de combustível (codificado da seguinte forma: A - álcool,
# G - gasolina), e retorne o valor a ser pago pelo cliente,
# sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do litro do
#  álcool é R$ 1,90.


def sell_fuel(liters, type):
    if type == "G":
        if liters > 20:
            print(
                f"Preço da gasolina para {liters} litros é de R${liters * 2.50 * 0.94}"
            )
        else:
            print(
                f"Preço da gasolina para {liters} litros é de R${liters * 2.50 * 0.96}"
            )
    elif type == "A":
        if liters > 20:
            print(
                f"Preço do álcool para {liters} litros é de R${liters * 1.90 * 0.97}"
            )
        else:
            print(
                f"Preço da álcool para {liters} litros é de R${liters * 1.90 * 0.95}"
            )
    else:
        print("invalid type")


sell_fuel(21, "G")
sell_fuel(19, "G")
sell_fuel(21, "A")
sell_fuel(19, "A")
sell_fuel(19, "E")
