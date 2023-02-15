import re


def verify_email(email):
    valid = re.fullmatch(r"[^@]+@[^@]+\.[^@]+", email)
    if valid:
        print("valid email")
        return 0
    else:
        print("invalid email")
        raise Exception
