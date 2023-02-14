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

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo


def star_block_maker(size):
    for num in range(size):
        print(size * "*")


star_block_maker(5)
