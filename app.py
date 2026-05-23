from flask import Flask, render_template, request, jsonify
import socket

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/scan', methods=['POST'])
def scan():

    data = request.json
    target = data['target']

    ports = [21,22,23,25,80,443,8080]

    open_ports=[]

    for port in ports:

        s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
        s.settimeout(1)

        result=s.connect_ex((target,port))

        if result==0:
            open_ports.append(port)

        s.close()

    return jsonify({
        "target":target,
        "open_ports":open_ports
    })


import os

if __name__=="__main__":
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT",5000))
    )