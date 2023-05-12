class Ventilador:
    def __init__(self, cor, preco):
        self.cor = cor
        self.preco = preco

    def __str__(self):
        return f"ventilador {self.cor}"


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    def comprar_ventilador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def __str__(self):
        return f"{self.nome} tem um {self.liquidificador}"


ventilador = Ventilador("amarelo", 10)
pessoa = Pessoa("Erik", 20)
pessoa.comprar_ventilador(ventilador)
print(pessoa)
