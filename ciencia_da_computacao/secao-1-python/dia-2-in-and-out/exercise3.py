import random

file = open('words.txt')

words = [word.strip() for word in file]
file.close()
word = random.choice(words)

scrambled_word = "".join(random.sample(word, len(word)))

attempt = input(f"Guess the word '{scrambled_word}': ")
while attempt != word:
    print(f"It is not {attempt}...")
    attempt = input(f"try again '{scrambled_word}': ")
print("Yeah! You got it!")
