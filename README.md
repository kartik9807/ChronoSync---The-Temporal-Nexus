# 🚀 ChronoSync - The Temporal Nexus

> A secure, role-based mission control system built for the **WebND Internal Hackathon**.

ChronoSync is a full-stack task management platform inspired by futuristic mission control systems. Users authenticate through secure sessions and manage time-sensitive missions based on their security clearance. Every mission expires automatically after **10 minutes**, encouraging real-time decision making.

---

## ✨ Features

### 🔐 Authentication
- Session-based authentication using **express-session**
- Secure HTTP-only cookies
- Persistent login across page refreshes
- Protected frontend routes
- Protected backend APIs

### 🛡️ Clearance Based Access Control
Five clearance levels are supported:

| Clearance | Role |
|-----------|------|
| LEVEL_1 | Recruit |
| LEVEL_2 | Operator |
| LEVEL_3 | Captain |
| LEVEL_4 | Commander |
| LEVEL_5 | Director |

Users can only create or delete missions within their authorized clearance.

---

### 📋 Mission Management

- Create Missions
- Delete Missions
- Clearance Filtering
- Live Countdown Timer
- Automatic Mission Expiration
- Mission Statistics Dashboard

---

### ⚡ Security

- Session Authentication
- Protected REST APIs
- Clearance Guard Middleware
- Server-controlled task expiration
- UUID based mission IDs
- Atomic file writes for persistent storage

---

## 🛠 Tech Stack

### Frontend

- React
- React Router
- Tailwind CSS
- Context API
- Custom Hooks
- React Toastify
- Lucide React

### Backend

- Node.js
- Express.js
- express-session
- UUID
- fs/promises

### Deployment

- Frontend → Vercel
- Backend → Render

---

# 📂 Project Structure

```
ChronoSync
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── utils
│   ├── db.json
│   └── app.js
│
└── frontend
    ├── components
    ├── context
    ├── hooks
    ├── pages
    ├── utils
    └── App.jsx
```
---

# 🔒 API Overview

## Authentication

```
POST /api/auth/login
```

Creates a secure user session.

```
GET /api/auth/user
```

Returns the currently authenticated user.

```
POST /api/auth/logout
```

Destroys the active session.

---

## Missions

```
GET /api/nexus/tasks
```

Returns all active missions.

```
POST /api/nexus/tasks
```

Creates a new mission (Protected).

```
DELETE /api/nexus/tasks/:id
```

Deletes a mission (Protected).

---

# 💾 Data Persistence

The project uses **db.json** as persistent storage.

Every update uses **atomic file writes**, ensuring that partial writes never corrupt the database.

Mission expiration is automatically handled based on timestamps.

---

# 📸 Screenshots

## Login Screen

<img width="1920" height="970" alt="image" src="https://github.com/user-attachments/assets/48079d00-fd39-49ff-be4b-3452f43d8bc6" />

---

## Dashboard

<img width="1920" height="970" alt="image" src="https://github.com/user-attachments/assets/01d66d97-22ea-4b6c-af28-06076d699134" />

---

# 🌟 Future Improvements

- MongoDB Integration
- Socket.IO for Real-Time Updates
- Mission Audit Logs
- Search & Sorting
- User Management
- Docker Support
- Role Management Panel
- Notifications

---

# 👨‍💻 Developer

**Kartik Shah**

Built for the **WebND Internal Hackathon**.

---

# ⭐ Key Highlights

- Session Authentication
- Role-Based Access Control
- Protected APIs
- Protected React Routes
- Custom React Hooks
- Context API
- Atomic File Writes
- UUID Mission IDs
- Live Countdown Timers
- Responsive UI
