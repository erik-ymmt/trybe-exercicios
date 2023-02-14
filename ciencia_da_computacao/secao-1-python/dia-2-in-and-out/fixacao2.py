# Escreva um programa que receba vários números naturais e calcule
# a soma desses valores.
# Caso algum valor da entrada seja inválido (por exemplo uma letra),
# uma mensagem deve ser exibida na saída de erros no seguinte formato:
# “Erro ao somar valores, {valor} é um valor inválido”.
# Ao final, você deve imprimir a soma dos valores válidos.


input_to_sum = input(
    "Digite os números que quer somar, com espaços entre eles: "
)

array = input_to_sum.split(" ")
sum = 0
for num in array:
    if not num.isdigit:
        print(f"Erro! {num} não é um número!")
        break
    else:
        sum += float(num)


print(sum)
