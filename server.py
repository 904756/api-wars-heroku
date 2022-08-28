from flask import Flask, render_template, session, flash, redirect, json, jsonify


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/registration")
def registration():
    return render_template("registration.html")


@app.route("/login")
def login():
    return render_template("log_in.html")


if __name__ == "__main__":
    app.run(
        debug=True,
        host="0.0.0.0",
            port=80,
    )
