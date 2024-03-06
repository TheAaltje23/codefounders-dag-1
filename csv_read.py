print("Start csv read appliaction")

import pandas

df = pandas.read_csv('pokemon.csv')

print(df["Name"])

for r, rij in df.iterrows():
    print(rij["name"])