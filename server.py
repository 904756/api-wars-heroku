from flask import Flask, render_template, redirect, request, url_for, session
import data_manager
import os
from werkzeug.utils import secure_filename
import datetime
import bcrypt

UPLOAD_FOLDER = 'static'

app = Flask(__name__)
app.config["SECRET_KEY"] = 'PQHL-_RyvW8-rlGvakZUBQ'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route("/")
def main_page():
    return render_template("index.html")


@app.route("/sign-up", methods=['GET', 'POST'])
def sign_up_page():
    if request.method == 'POST':
        user = request.form['username']
        password = request.form['password']
        message = data_manager.registration(user, password)
        if message is not None:
            return render_template('sign_up.html', message=message)
        info = data_manager.get_user_info_by_username(user)
        return render_template('profile.html', info=info)
    return render_template('sign_up.html')


@app.route("/sign-in", methods=['GET', 'POST'])
def sign_in_page():
    return render_template("sign_in.html")


@app.route("/sign-out", methods=['GET', 'POST'])
def sign_out_page():
    return render_template("sign_out.html")


@app.route("/profile")
def profile():
    return render_template("profile.html")


@app.route("/planet-list")
def show_planet_list():
    return render_template("planet_list.html")


if __name__ == "__main__":
    app.run(
        debug=True,
        host="localhost",
        port=5000
    )


# put your code here
