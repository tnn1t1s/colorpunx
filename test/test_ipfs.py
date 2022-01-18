import sys
import json
sys.path.append('..')
sys.path.append('.')
from cryptopunks import ipfs


_assets_dir = ('cryptopunks/assets')
_secrets = json.load(open('./secrets.json', 'r'))
_c = ipfs.Client(**_secrets['infura-ipfs-stg'])


def test_module_loads():
    assert (25) == 25


def test_ipfs_add_cat():
    f = _c.add_file('colorpunx1', f"{_assets_dir}/json/colorpunx1.json")
    g = _c.get_file(f['Hash'])
    assert eval(g.text)['id'] == 1
