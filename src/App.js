import React from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoute from "./components/PublicRoute";
import DoctorsList from "./Pages/Admin/DoctorsList";
import UsersList from "./Pages/Admin/UsersList";
import ApplyDoctor from "./Pages/ApplyDoctor";
import Appointments from "./Pages/Appointments";
import BookAppointment from "./Pages/Doctor/BookAppointment";
import DoctorAppointments from "./Pages/Doctor/DoctorAppointments";
import Profile from "./Pages/Doctor/Profile";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Notifications from "./Pages/Notifications";
import Register from "./Pages/Register";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <div>
      <BrowserRouter>
        {loading && (
          <div className="spinner-parent">
            <div class="spinner-border" role="status"></div>
          </div>
        )}
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoutes>
                <Notifications />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/apply-doctor"
            element={
              <ProtectedRoutes>
                <ApplyDoctor />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/admin/userslist"
            element={
              <ProtectedRoutes>
                <UsersList />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/admin/doctorslist"
            element={
              <ProtectedRoutes>
                <DoctorsList />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/doctor/profile/:userId"
            element={
              <ProtectedRoutes>
                <Profile />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/book-appointment/:doctorId"
            element={
              <ProtectedRoutes>
                <BookAppointment />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/appointments"
            element={
              <ProtectedRoutes>
                <Appointments />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/doctor/appointments"
            element={
              <ProtectedRoutes>
                <DoctorAppointments />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
