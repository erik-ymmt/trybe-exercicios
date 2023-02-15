from exercise3 import verify_email
import pytest


def test_valid_email_input():
    "Testa input válido"
    assert verify_email("teste@teste.com") == 0


def test_valid_email_input_with_different_domain():
    "Testa input válido"
    assert verify_email("teste@trybe.org") == 0


def test_invalid_email_input():
    "Testa se input de email inválido levanta erro"
    with pytest.raises(Exception):
        verify_email("teste@teste")


def test_random_invalid_email_input():
    "Testa se input aleatório inválido levanta erro"
    with pytest.raises(Exception):
        verify_email("avenida brasil")
