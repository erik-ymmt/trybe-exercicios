students_below_six = []
with open("students.txt") as file:
    for line in file:
        student_and_grade = line.split(" ")
        if int(student_and_grade[1]) < 6:
            students_below_six.append(student_and_grade[0])
            print(students_below_six)


with open("reprovados.txt", mode="w") as reprovados:
    print(students_below_six)
    reprovados.writelines(students_below_six)

