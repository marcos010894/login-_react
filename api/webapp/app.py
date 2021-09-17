import os,json
from flask_cors import CORS,cross_origin
from flask import Flask,request

#
app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app,resource={r'/*':{'origins':'*'}})


@app.route('/')
@cross_origin()
def hello():
    return "hello world"

@app.route('/register',methods=['GET','POST'])
def register():
    from save_account import save_account
    

    try:
        data = request.data
        data = json.loads(data)
        save_account(data)
        return data
    except Exception as e:
        return str(e),404

@app.route('/login',methods=['GET','POST'])
def login():
    from get_account import get_account
    try:
        data = request.data
        data = json.loads(data)
        resp = get_account(data)
        if resp:
            return '1',200
        return "N",200
        
    except Exception as e:
        return str(e),404


    
if __name__ == "__main__":
    app.run(host='0.0.0.0')