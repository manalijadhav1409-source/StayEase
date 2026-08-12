# StayEase

## Hotel Booking and Management System

StayEase is a web-based hotel booking and management system that allows customers to browse hotels, view available rooms, make bookings, and submit reviews. Administrators can manage hotels, rooms, and bookings through an admin dashboard.

---

## Features

### Customer Features

- User Registration and Login
- JWT-based Authentication
- Browse Hotels
- Search Hotels by City
- View Hotel Details
- View Available Rooms
- View Room Details
- Book Rooms
- Calculate Total Booking Price
- View My Bookings
- Submit Hotel Reviews and Ratings
- View Customer Reviews
- View Average Hotel Rating

### Admin Features

- Admin Login
- Admin Dashboard
- Manage Hotels
- Add Hotels
- Manage Rooms
- Add Rooms
- Edit Rooms
- Delete Rooms
- Manage Room Availability
- Manage Room Images
- View Customer Bookings

---

## Technology Stack

### Frontend

- React.js
- JavaScript
- Bootstrap
- HTML5
- CSS3
- Axios
- React Router

### Backend

- Java
- Spring Boot
- Spring Data JPA
- Spring Security
- JWT Authentication
- Maven

### Database

- MySQL

### Development Tools

- Spring Tool Suite (STS)
- Visual Studio Code
- MySQL Workbench
- Postman
- Git
- GitHub

---

## System Architecture

```text
                    StayEase
                       |
        +--------------+--------------+
        |                             |
   React Frontend               Spring Boot Backend
        |                             |
        | HTTP / REST API             |
        +---------------------------->|
                                      |
                              Spring Security
                                      |
                                JWT Authentication
                                      |
                              Spring Data JPA
                                      |
                                      v
                                MySQL Database
```

---

## Project Structure

```text
StayEase/
│
├── backend/
│   ├── src/
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── database/
├── docs/
├── .gitignore
└── README.md
```

---

## Main Modules

### Authentication Module

- User Registration
- User Login
- Password Encryption
- JWT Token Generation
- JWT Authentication
- Role-based Access

### Hotel Module

- Add Hotel
- Get All Hotels
- Get Hotel By ID
- Search Hotel By City
- Hotel Details

### Room Module

- Add Room
- Get All Rooms
- Get Rooms By Hotel
- Get Room By ID
- Update Room
- Delete Room
- Room Availability
- Room Image URL

### Booking Module

- Room Booking
- Check-in Date
- Check-out Date
- Total Days Calculation
- Total Price Calculation
- Booking Status
- My Bookings
- Admin Booking Management

### Review and Rating Module

- Submit Review
- Hotel Rating
- Customer Reviews
- Average Hotel Rating

---

## Database Entities

- User
- Hotel
- Room
- Booking
- Review
- Payment

---

## Room Images

Room images are stored using public image URLs.

The backend returns the room-specific image URL through the Room API, and the React frontend displays the corresponding image.

---

## API Structure

```text
/api/auth/**
/api/hotels/**
/api/rooms/**
/api/bookings/**
/api/reviews/**
```

---

## Local Setup

### Prerequisites

- JDK 21
- Maven
- MySQL 8
- Node.js
- npm
- Git

### Backend

```bash
cd StayEase/backend
```

Configure the database using environment variables or local configuration.

Start the Spring Boot application.

### Frontend

```bash
cd StayEase/frontend
npm install
npm run dev
```

---

## Database Setup

```sql
CREATE DATABASE stayEase_db;
```

Do not commit database passwords or sensitive credentials to GitHub.

---

## Git Branches

```text
main
develop
feature/auth
feature/frontend
feature/hotel
```

---

## Security

StayEase uses:

- Spring Security
- JWT Authentication
- Password Encryption
- Role-based Authorization

Sensitive configuration such as database credentials and JWT secrets should be supplied through environment variables.

---

## Testing

- User Registration
- User Login
- JWT Authentication
- Hotel Listing
- Hotel Details
- Room Listing
- Room Management
- Room Images
- Room Booking
- My Bookings
- Admin Booking Management
- Reviews and Ratings

---

## Future Deployment

```text
React Frontend
       |
       v
Cloud Hosting
       |
       v
Spring Boot Backend
       |
       v
Cloud MySQL Database
```

---

## License

This project is developed for educational and project demonstration purposes.