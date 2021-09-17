import mysql.connector
import keys_db as keys

def commit_close(func):
    def decorator(*args):
        con = mysql.connector.connect(
            host = keys.host.strip(),
            port = keys.port,
            user = keys.user.strip(),
            database= keys.database.strip(),
            password = keys.password.strip()
        )
        cur = con.cursor()
        sql = func(*args)
        cur.execute(sql)
        con.commit()
        con.close()
    return decorator