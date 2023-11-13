from flask import Flask, render_template, request
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

load_dotenv()


def create_app():
    app = Flask(__name__)

    app.config["MAIL_SERVER"]="smtp.gmail.com"
    app.config["MAIL_PORT"]=587
    app.config["MAIL_USE_TLS"]=True
    app.config["MAIL_USE_SSL"]=False
    app.config["MAIL_USERNAME"]=os.getenv("EMAIL")
    app.config["MAIL_PASSWORD"]=os.getenv("PASSWORD")

    mail = Mail(app)

    @app.route("/", methods = ["GET", "POST"])
    def home():
        if request.method == "POST":
            nome=request.form.get("nome")
            email=request.form.get("email")
            assunto=request.form.get("assunto")
            mensagem=request.form.get("mensagem")
            


            msg=Message(assunto,
                        sender=email,
                        recipients=[os.environ.get("EMAIL")]
                        )

            msg.body=f"Mensagem de: {email}\n{mensagem}\n{nome}"

            mail.send(msg)       

        return render_template("home.html")
    
    return app