from flask import Flask, request, jsonify
from flask_cors import CORS
from gradio_client import Client
import sys

app = Flask(__name__)
CORS(app)  # Enable CORS

# Ensure the stdout is using UTF-8 encoding
sys.stdout.reconfigure(encoding='utf-8')

client = Client("umeshkhatiwada13/football_chatbot")

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    input_text = data['input_text']
    result = client.predict(input_text, api_name="/predict")
    return jsonify({"output": result})

if __name__ == '__main__':
    app.run(debug=True)
