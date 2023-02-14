import json
import csv

with open("books.json") as file:
    books = json.load(file)
    categories = {}
    for book in books:
        book_categories = book["categories"]
        for category in book_categories:
            if category not in categories:
                categories[category] = 1
            else:
                categories[category] += 1
    print()

with open("categories_report.csv", "w", encoding="utf-8") as report:
    writer = csv.writer(report)

    headers = ["categoria", "porcentagem"]

    writer.writerow(headers)

    total_categories = len(categories)
    for categ, cat_total in categories.items():
        row = [categ, cat_total/total_categories]
        writer.writerow(row)
