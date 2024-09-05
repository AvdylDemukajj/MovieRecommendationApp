from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

final_data = pd.read_csv('movie_dataset.csv')
final_data['movie_title'] = final_data['movie_title'].str.strip().str.lower()

with open('similarity.pkl', 'rb') as file:
    similarity = pickle.load(file)

