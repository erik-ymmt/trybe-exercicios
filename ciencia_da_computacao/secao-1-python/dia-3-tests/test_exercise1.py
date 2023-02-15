from exercise1 import converter


def test_returns_fizz_when_is_divisible_by_three():
    'Para o input 3, retorna [1, 2, "Fizz"]'
    assert converter(3) == [1, 2, "Fizz"]


def test_returns_buzz_when_is_divisible_by_five():
    'Para o input 5, retorna "Buzz" na posição 4'
    assert converter(5)[4] == "Buzz"


def test_returns_fizzbuzz_when_is_divisible_by_five_and_three():
    'Para o input 5, retorna "Buzz" na posição 4'
    assert converter(15)[14] == "FizzBuzz"


def test_returns_long_list():
    "Para o input 500, retorna uma lista com 500 elementos"
    assert len(converter(500)) == 500
