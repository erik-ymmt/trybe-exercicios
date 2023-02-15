import random

word = random.choice(["brasil", "argentina", "portugal"])

scrambled_word = "".join(random.sample(word, len(word)))

attempt = input(f"Guess the word '{scrambled_word}': ")
while attempt != word:
    print(f"It is not {attempt}...")
    attempt = input("try again '{scrambled_word}': ")
print("Yeah! You got it!")
