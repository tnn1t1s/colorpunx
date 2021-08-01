import requests

class Client:
    _endpoint = 'https://ipfs.infura.io:5001/api/v0/add';
    _add = 'add';
    
    def __init__(self, project, secret, endpoint):
        self.project=project
        self.secret=secret
        self.endpoint=endpoint
        self.add = f"{self._endpoint}/{self._add}"

    def add_files(files):
        '''
            files = {
                'file': '<full_path_to_your_file>'
            }
        '''
        response = requests.post(self.uris.add,
                             files=files,
                             auth=(self.project_id,self.secret))
        return response
