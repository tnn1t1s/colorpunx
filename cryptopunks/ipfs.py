import requests

class Client:
    _endpoint = 'https://ipfs.infura.io:5001/api/v0';
    _add = 'add';
    
    def __init__(self, project, secret, endpoint):
        self.project=project
        self.secret=secret
        self.endpoint=endpoint
        self.endpoints_add = f"{self._endpoint}/{self._add}"

    def add_files(self, files):
        '''
            files = {
                'file': '<full_path_to_your_file>'
            }
        '''
        response = requests.post(self.endpoints_add,
                             files=files,
                             auth=(self.project,self.secret))
        return response
