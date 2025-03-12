from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def index():
    name = "Nien"
    return render_template("index.html",usertxt = name)
if __name__ == '__main__':
    app.run()