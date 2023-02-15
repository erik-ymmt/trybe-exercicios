def verify_num(input):
    decoded = ""
    for letter in input:
        if letter in ["A", "B", "C"]:
            decoded += "2"
        elif letter in ["D", "E", "F"]:
            decoded += "3"
        elif letter in ["G", "H", "I"]:
            decoded += "4"
        elif letter in ["J", "K", "L"]:
            decoded += "5"
        elif letter in ["M", "N", "O"]:
            decoded += "6"
        elif letter in ["P", "Q", "R", "S"]:
            decoded += "7"
        elif letter in ["T", "U", "V"]:
            decoded += "8"
        elif letter in ["W", "X", "Y"]:
            decoded += "9"
        else:
            decoded += letter
    print(decoded)


verify_num("1-HOME-SWEET-HOME")
verify_num("MY-MISERABLE-JOB")
