from flask import Flask, request, render_template, url_for
import os
import mysql.connector
from datetime import datetime

app = Flask(__name__)
app.template_folder = 'templates'
app.static_folder = 'static'

@app.route("/")
def index():
	return render_template("index.html")

@app.route('/upload', methods=["POST"])
def upload_file():
	if 'file' not in request.files:
		return "file not found in request.files"

	file = request.files['file']
	if file.filename == '':
		return "empty filename"

	if file:
		filename = file.filename
		filepath = os.path.join('upload', filename) #上傳文件的路徑
		file.save(filepath)

		upload_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

		conn = mysql.connector.connect(
			host = "localhost",
			port = "3306",
			user = "root",
			password = "password",#change to your own password
			database = "pics"
		)

		cursor = conn.cursor()

		cursor.execute("INSERT INTO `images` (filename, filepath, upload_time) VALUES (%s, %s, %s)", (filename, filepath, upload_time))
		conn.commit()  # Commit the transaction to save changes to the database

		cursor.close()
		conn.close()

		return "文件上傳成功"


if __name__ == "__main__":
	app.run(debug=True)