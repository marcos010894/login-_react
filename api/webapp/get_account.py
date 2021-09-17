import mysql.connector
import keys_db as keys

def get_account(data):
    cod = """
    SELECT * from usuarios where email = '%s' and senha = '%s';
    """%(data['email'],data['senha'])
    con = mysql.connector.connect(
            host = keys.host.strip(),
            port = keys.port,
            user = keys.user.strip(),
            database= keys.database.strip(),
            password = keys.password.strip()
        )
    cur = con.cursor(dictionary=True)
    cur.execute(cod)
    myresult = cur.fetchone()
    con.close()
    return myresult