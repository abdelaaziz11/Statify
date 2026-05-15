# Statify

<div align="center">
  <p><strong>Transforming the Moroccan National Census through Digital Empowerment</strong></p>
</div>

Statify is a groundbreaking web application designed to modernize the way Morocco conducts its national census. By providing an intuitive platform for direct citizen participation, Statify streamlines the data collection process, shifting away from traditional manual collection methods to a more efficient digital approach. 

The primary mission of Statify is to empower citizens to input their own data securely and accurately, which helps the government save valuable time, reduce operational costs, and enhance the overall accuracy of large-scale statistical reporting.

---

## 🎯 The App Idea

The national census is a vital undertaking for any country, but it often involves significant logistical challenges, high costs, and the potential for human error during data collection and entry. Statify tackles these challenges head-on by crowdsourcing the census data collection directly to the citizens.

### Key Objectives:
- **Digital Transformation**: Moving the census from paper-based to a fully digital platform.
- **Citizen Empowerment**: Allowing Moroccan citizens to securely input their personal information (such as CIN, demographic data, employment status, and family details) from the comfort of their homes.
- **Data Accuracy**: Real-time validation ensures that the data provided is accurate and formatted correctly.
- **Resource Optimization**: Reduces the need for thousands of on-the-ground data collectors, saving the government significant resources.

By fostering direct citizen participation, Statify ensures that every voice is heard and every data point counts toward building a more connected and informed Morocco.

---

## 🚀 Features

- **Direct Citizen Input**: A comprehensive form for users to submit their census data (demographics, contact info, employment, etc.).
- **User Authentication**: Secure signup and login system using JWT (JSON Web Tokens) to protect user accounts and data.
- **Intuitive User Interface**: A modern, easy-to-use React frontend designed for accessibility and clarity.
- **Real-Time Data Validation**: Ensures that submitted data meets all necessary criteria before being stored in the database.
- **RESTful API**: A robust Flask backend providing a reliable API for seamless frontend-backend communication.
- **Dark/Light Mode**: A personalized viewing experience with a built-in theme toggle.

---

## 💻 Technologies Used

### Frontend
- **React.js**: For building the interactive user interface.
- **Tailwind CSS**: For modern, responsive, and beautiful styling.

### Backend
- **Python / Flask**: The core backend framework.
- **Flask-RESTX**: For building and documenting the REST API.
- **SQLAlchemy**: ORM for database management.
- **SQLite**: Lightweight database for development (can be scaled to PostgreSQL/MySQL for production).
- **Flask-JWT-Extended**: For secure token-based authentication.

---

## 🛠️ Installation & Setup

To set up the Statify project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/Bouayadihamid/Statify_Portfolio.git
cd Statify_Portfolio
```

### 2. Backend Setup

Navigate to the `backend` directory and set up the Python environment:

```bash
cd backend
pipenv shell
pipenv install
```

Make sure you have your environment variables set up correctly (e.g., in a `.env` file) if needed. 
Run the Flask server:

```bash
python main.py
```
*(The backend will typically run on `http://localhost:5000` or `http://localhost:5001` depending on your configuration).*

### 3. Frontend Setup

Open a new terminal window, navigate to the `client` directory, and install dependencies:

```bash
cd client
npm install
```

Start the React development server:

```bash
npm start
```
*(The frontend will typically be accessible at `http://localhost:3000`).*

---

## 📖 Usage

1. **Sign Up / Log In**: Start by creating an account or logging in with your existing credentials.
2. **Access the Form**: Navigate to the census form page.
3. **Submit Data**: Carefully fill out your personal information (CIN, Full Name, Age, Occupation, etc.) and submit the form.
4. **Update Information**: If necessary, you can return to update your submitted census data to ensure it remains accurate.

---

## 🤝 Contributing

Contributions to improve Statify are highly appreciated! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE) (or the applicable Public License).

---

## 📬 Contact Information

For any questions, suggestions, or support, please reach out to:

- **Email**: statify.support@morocco.org
- **GitHub Repository**: [Statify Portfolio](https://github.com/Bouayadihamid/Statify_Portfolio)
