"""Tools for working with Infura IPFS Gateway; this includes utilities for
writing json and binary files, reading files and listing directories.

Class:
    ipfs.Client({secrets})
"""

import requests


class Client:
    _endpoint = 'https://ipfs.infura.io:5001/api/v0'
    _add = 'add'
    _cat = 'cat'

    def __init__(self, project, secret, endpoint):
        self.project = project
        self.secret = secret
        self.endpoint = endpoint
        self.endpoints_add = f"{self._endpoint}/{self._add}"
        self.endpoints_cat = f"{self._endpoint}/{self._cat}"

    def add_file(self, name, path, mode='r'):
        """
        adds a single file named `name`[str]
        to ipfs from `path`[str] using `mode`[str]
        """
        files = {
            name: open(path, mode)
        }
        response = requests.post(self.endpoints_add,
                                 files=files,
                                 auth=(self.project, self.secret))
        if response.status_code == 200:
            return eval(response.text)
        else:
            return response

    def add_files(self, files_d):
        raise Exception

    def get_file(self, hash):
        """
        cats the file on IPFS identified by `hash`[str]
        """
        uri = f"{self.endpoints_cat}?arg={hash}"
        response = requests.get(uri, auth=(self.project, self.secret))
        return response
