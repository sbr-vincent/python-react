from flask import Flask
import datetime

x = datetime.datetime.now()

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello Flask"

@app.route('/data')
def get_time():

    return {
        "Name" : "Vincent",
        "Age" : "30",
        "Date" : x, 
        "programming" : "python"
    }


if __name__=="__main__":
    app.run(debug=True)