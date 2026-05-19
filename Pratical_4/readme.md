# TikTok Clone – Frontend & Backend Integration

## Overview

This project is a full-stack TikTok-style web application developed using **Next.js** for the frontend and **Express.js** with **Prisma ORM** for the backend. The application supports user authentication, video uploads, personalized feeds, and social interaction features such as following users and liking videos.

The purpose of this practical is to connect the frontend application to the backend API and implement real-time data interaction.

# Features

## Authentication
- User registration and login
- JWT-based authentication
- Protected routes
- Persistent login using local storage

## Video Features
- Upload videos with captions and thumbnails
- Display videos from backend API
- Video playback controls
- Like and unlike functionality

## Social Features
- Follow and unfollow users
- Personalized “Following” feed
- User profile pages
- Explore users page

## User Interface
- Responsive design
- Authentication modals
- Loading and error handling
- Real-time UI updates


# Technologies Used

## Frontend
- Next.js
- React.js
- Axios
- Tailwind CSS
- React Hot Toast

## Backend
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication
- bcrypt


# Project Structure

```plaintext
src/
│
├── app/
│   ├── following/
│   ├── explore-users/
│   ├── profile/
│   └── upload/
│
├── components/
│   ├── auth/
│   ├── layout/
│   └── ui/
│
├── contexts/
│
├── lib/
│
└── services/

# Installation and Setup
1. Clone the Repository
git clone <git@github.com:kinley05/SS2026_WEB101_02240348.git>

2. Install Frontend Dependencies
npm install

Additional packages used:

npm install axios jwt-decode react-hot-toast

3. Configure Environment Variables

Create a .env.local file in the frontend root directory:

NEXT_PUBLIC_API_URL=http://localhost:8000/api

4. Start the Backend Server

Navigate to the backend project directory:

npm install
npm run dev

5. Start the Frontend Server

Navigate to the frontend project directory:

npm run dev

Frontend URL:

http://localhost:3000

Backend API URL:

http://localhost:8000/api

# API Integration

The frontend communicates with the backend using Axios.

Features implemented:

API client configuration
Request interceptors
JWT token handling
Error handling

# Authentication Flow
- User registers or logs in
-Backend generates JWT token
- Token is stored in local storage
- Axios automatically attaches token to requests
- Protected routes verify authentication status

# Learning Outcomes

Through this practical, the following concepts were learned:

- Frontend and backend integration
- REST API communication
- JWT authentication
- React Context API
- Axios interceptors
- Dynamic routing in Next.js
- State management
- Full-stack application development

# References
-Next.js Documentation
- React Documentation
- Express.js Documentation
- Prisma ORM Documentation
- Axios Documentation
- JWT Authentication Documentation