# 📚 LMS – Learning Management System

A full-featured Learning Management System where instructors can create and manage courses, while students can browse, enroll, and track their learning journey. Features include secure authentication, video uploads, payment processing, and a modern UI/UX.

## 🚀 Features

- Instructor dashboard to create/edit courses
- Student dashboard with enrolled course tracking
- Video lectures and course materials
- Authentication using Clerk
- File uploads via Multer and Cloudinary
- Payment integration with Stripe
- Responsive and clean UI

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Clerk
- **File Uploads:** Multer, Cloudinary
- **Payments:** Stripe

## 📂 Project Structure

```bash
lms/
├── client/                  # React frontend
│   ├── public/
│   └── src/
├── server/                  # Express backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── utils/
├── .env                     # Environment variables
├── package.json             # Project metadata and scripts
└── README.md                # Project documentation
