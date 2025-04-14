from flask import Flask, request, jsonify
import smtplib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Replace with your credentials
SENDER_EMAIL = "harshiiit51@gmail.com"  # Your Gmail address
SENDER_PASSWORD = "sxpx lqbh ytez ugee"  # Your App Password

# Function to send email (review submission)
def send_review_email(receiver_email, review):
    """Sends the customer review via email."""
    subject = "Customer Review Submission"
    body = f"Dear Team,\n\nA THANK YOU FOR VISTING ANCIENT AROMA YOUR REVIEW IS AS FOLLOWS:\n\n{review}\n\nBest regards,\nYour Team"

    email_message = f"Subject: {subject}\n\n{body}"

    try:
        # Use SMTP_SSL to connect securely to Gmail's SMTP server
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.sendmail(SENDER_EMAIL, receiver_email, email_message)

        return {"status": "success", "message": f"Review sent to {receiver_email}"}
    except Exception as e:
        return {"status": "error", "message": str(e)}

@app.route("/submit-review", methods=["POST"])
def submit_review():
    """Endpoint to handle review submission."""
    data = request.json
    email = data.get("email")
    review = data.get("review")

    if not email or not review:
        return jsonify({"status": "error", "message": "Email and Review are required"}), 400

    response = send_review_email(email, review)
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)
