import json

base = 'https://gateway.pinata.cloud'

d = {}

for line in open('p').readlines():
    url = line.strip().split(' ')[2][6:-2]
    pair = url.split('=')
    (name, color) = (pair[1].split('_'))
    id = name[9:]
    hex = f"#{color[:-5]}"
    d[int(id)] = [hex, f"{base}{url}"]


with open('nfts.json', 'w') as fp:
    json.dump(d, fp)

# pickle.dump(d, open('cryptopunks/assets/_img_uris.pickle', "wb"))
