from commit_close import commit_close
@commit_close
def save_account(data):
    return """
    INSERT into usuarios (nome, email, senha) VALUES ('%s', '%s', '%s');
    """%(data['nome'],data['email'],data['senha'])