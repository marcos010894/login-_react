import os
_archive = None
_host = None
_port = 3306
_database = None
_user = None
_password = None

try:
    _archive = open('keys_db.txt', 'r', encoding="utf8")
    _lines = _archive.readlines()
    _host = str(_lines[0])
    _port = str(_lines[1])
    _database = str(_lines[2])
    _user = str(_lines[3])
    _password = str(_lines[4])
    _archive.close()
except Exception as e:
    pass

host = os.environ.get('host_db',_host)
port = int(os.environ.get('port_db',int(_port)))
database = os.environ.get('database_db',_database)
user = os.environ.get('user_db',_user)
password = os.environ.get('password_db',_password)
