# Faça um programa que receba um nome e
# imprima o mesmo na vertical em escada invertida.

name = "ERIK"


def invert_name(name):
    printed_name = name
    while len(printed_name) > 0:
        print(printed_name)
        printed_name = printed_name[:-1]


invert_name(name)
