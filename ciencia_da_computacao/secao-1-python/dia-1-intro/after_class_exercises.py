# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


def higher_num(num1, num2):
    if num1 > num2:
        return num1
    return num2


print(higher_num(28, 115515))


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def calculate_avg(list):
    total = 0
    for num in list:
        total += num
    return total / len(list)


print(calculate_avg([1, 2, 3]))

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
# Por exemplo


def star_block_maker(size):
    for num in range(size):
        print(size * "*")


star_block_maker(5)


# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o
# nome com a maior quantidade de caracteres. Por exemplo, para
# ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda".


list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def bigger_name(list):
    bigger = ""
    for name in list:
        if len(name) > len(bigger):
            bigger = name
    return bigger


print(bigger_name(list))


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada
# 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam
# R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo
# a quantidade de latas de tinta a serem compradas e o preço total a partir do
# tamanho de uma parede (em m²).


def paint_to_buy(sq_meters):
    liters = sq_meters / 3
    buckets_of_paint = (liters // 18) + 1
    total_price = buckets_of_paint * 80
    return (buckets_of_paint, total_price)


print(paint_to_buy(3 * 18))


# Exercício 6: Crie uma função que receba os três lado de um triângulo
# e informe qual o tipo de triângulo formado ou "não é triangulo", caso
# não seja possível formar um triângulo.


def type_of_triangle(side1, side2, side3):
    verification1 = side1 + side2 > side3
    verification2 = side2 + side3 > side1
    verification3 = side1 + side3 > side2

    if verification1 and verification2 and verification3:
        if side1 == side2 == side3:
            print("equilatero")
        elif side1 != side2 != side3:
            print("escaleno")
        else:
            print("isoceles")
    else:
        print("not a triangle")


type_of_triangle(3, 3, 3)
