from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/")
def elden_ring():
    return render_template("elden_ring.html")

@app.route("/wiki")
def wiki():
    return render_template("wikis.html")

if __name__ == "__main__":
    app.run(debug=True)
    

    