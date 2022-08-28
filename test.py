import requests

response = requests.get('https://api.github.com/repos/atom/atom').json()
print(response['stargazers_count'])
