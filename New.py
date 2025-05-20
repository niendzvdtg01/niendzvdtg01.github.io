from flask import Flask, request, render_template
app = Flask(__name__)
@app.route('/')
def index():
    return "Hello Nien"
if __name__ == '__main__':
    app.run()