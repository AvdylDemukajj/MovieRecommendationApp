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

@app.route("/")
def home():
    return {"message": "Hello from the recommendation backend"}


@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json
    movie_name = data['movie_name'].strip().lower()

    try:
        movie_index = final_data[final_data['movie_title'] == movie_name].index[0]
        distances = similarity[movie_index]
        recommended_movies_list = sorted(list(enumerate(distances)), reverse=True, key=lambda x: x[1])[1:6]

        recommendations = [final_data.iloc[i[0]].movie_title for i in recommended_movies_list]

        return jsonify({"recommendations": recommendations})
    except IndexError:
        app.logger.error(f'Movie title "{movie_name}" not found in the dataset')
        return jsonify({"error": "Movie title not found"}), 404
    except Exception as e:
        app.logger.error(f'An error occurred: {e}')
        return jsonify({"error": str(e)}), 500
