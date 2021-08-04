import sys
import json
sys.path.append('..')
sys.path.append('.')
from cryptopunks import ipfs


_assets_dir = ('cryptopunks/assets')

def test_module_loads():
    assert (25) == 25

def test_ipfs_add_cat():
    secrets = json.load(open('./secrets.json', 'r'))
    c = ipfs.Client(**secrets['infura-ipfs-stg'])
    fp = c.add_file('colorpunx1', f"{_assets_dir}/json/colorpunx1.json")
    g = c.get_file(fp['Hash'])
    assert g['id'] == 1

