import pytest
from exercise2 import verify_num


def test_if_returns_correct_output_for_HOME():
    "input: 1-HOME-SWEET-HOME, expected output: 1-4663-79338-4663"
    assert verify_num("1-HOME-SWEET-HOME") == "1-4663-79338-4663"


def test_if_returns_correct_output_for_MYMISERABLE():
    "input: MY-MISERABLE-JOB, expected output: 69-647372253-562"
    assert verify_num("MY-MISERABLE-JOB") == "69-647372253-562"


def test_if_returns_correct_output_for_LOVE():
    "input: I-LOVE-U, expected output:"
    assert verify_num("I-LOVE-U") == "4-5683-8"


def test_if_returns_error_for_invalid_input():
    "input: HOLY-SH**, expected output: ERROR"
    with pytest.raises(ValueError):
        verify_num("HOLY-SH**")
