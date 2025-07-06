<h1 align="center">🎓 Estudiantify — MERN Student Management Dashboard</h1>
<p align="center">
  A full-stack student management system built with the MERN stack to create, view, update, and delete student records — with search, filters, and responsive UI.
</p>

<p align="center">
  <a href="https://estudiantify.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live-Demo-00b894?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  <a href="https://github.com/sujal-1245/Estudiantify" target="_blank">
    <img src="https://img.shields.io/github/stars/sujal-1245/Estudiantify?style=for-the-badge&logo=github" alt="GitHub Stars" />
  </a>
</p>

---

## 🖼️ Preview

### 📋 Dashboard with Student Records

![image](https://github.com/user-attachments/assets/87b70742-292d-455c-ac05-601f518ee16c)


### ✍️ Add/Edit Student Modal

![image](https://github.com/user-attachments/assets/9f027271-eed2-4927-85b4-a9a1faa8021b)
![image](https://github.com/user-attachments/assets/1db43686-cc66-4d9a-8162-0e707db2229a)


### 🔎 Search & Filter by Department/Year

![image](https://github.com/user-attachments/assets/39707911-90dc-4232-941e-e6199ce30954)


---

## ✨ Features

* 🧾 **Student Table View** — Organized table layout for clean data viewing
* ➕ **Add Students** — Modal form for Name, Reg No, Department, Year, and Marks
* ✏️ **Edit/Update** — Modify student details instantly
* ❌ **Delete Students** — Remove outdated or wrong entries
* 🔍 **Search & Filter** — Real-time filtering by name, department, or year
* 💾 **Data Persistence** — Connected to backend via MongoDB (localStorage fallback)
* 📱 **Fully Responsive** — Optimized for desktops, tablets, and mobile screens

---

## 🧱 Tech Stack

| Category         | Tools Used                                |
| ---------------- | ----------------------------------------- |
| ⚛️ Frontend      | React.js, Tailwind CSS, Framer Motion     |
| 🌐 Backend       | Node.js, Express.js                       |
| 🛢️ Database     | MongoDB (via Mongoose)                    |
| 🔐 API Routes    | RESTful APIs with Axios                   |
| ⚙️ State & Logic | useState, useEffect, Context (if used)    |
| ☁️ Deployment    | Vercel (frontend), Render/Atlas (backend) |

---

## 📁 Project Structure

```bash
Estudiantify/
│
├── client/                    # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/        # Header, Sidebar, Table, Modal, Filters
│   │   ├── features/          # Student CRUD logic
│   │   ├── pages/             # Dashboard, Settings
│   │   ├── utils/             # API calls, constants
│   │   └── styles/            # Tailwind configs
│
├── server/                    # Express Backend
│   ├── models/                # Student schema
│   ├── routes/                # API routes
│   ├── controllers/           # CRUD handlers
│   ├── config/                # DB connection
│   └── .env                   # Environment variables
```

---

## 🚀 Getting Started

### 🔧 Backend (Express + MongoDB)

```bash
cd server
npm install
npm run dev
```

Set up your `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

### 🌐 Frontend (React)

```bash
cd client
npm install
npm run dev
```

---

## 💡 Why Estudiantify?

> Managing student data should be as intuitive as it is powerful.
> **Estudiantify** offers a complete MERN stack dashboard with seamless CRUD, search, and filter tools — perfect for faculty, admins, or devs building dashboards.

---

## 🙋‍♂️ About Me

I'm **Sujal Bhagat**, a full-stack developer with a passion for building clean, scalable, and modern web apps using React, Node, and MongoDB.

* 🌍 [Portfolio Website](https://sujal-bhagat.vercel.app)
* 🧑‍💻 [GitHub](https://github.com/sujal-1245)
* 💼 [LinkedIn](https://linkedin.com/in/sujal-bhagat-sdb1245)

---

## 🫶 Show Some Love

If this helped you or inspired your own dashboard, don’t forget to ⭐️ the repo!

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
