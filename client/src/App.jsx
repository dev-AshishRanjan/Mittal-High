import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Aside from "./components/Aside";
import Auth from "./components/Auth";
import OwnerDetails from "./components/OwnerDetails";
import TenantDetails from "./components/TenantDetails";
import CreatingOwner from "./components/CreatingOwner";
import CreatingParkingSlot from "./components/CreatingParkingSlot";
import ComplaintsViewer from "./components/ComplaintsViewer";
import RaisingComplaints from "./components/RaisingComplaints";
import ParkingSlot from "./components/ParkingSlot";
import PayMaintenance from "./components/PayMaintenance";
import CreatingTenant from "./components/CreatingTenant";
import RoomDetails from "./components/RoomDetails";
import ErrorPage from "./ErrorPage";
import ComplaintsViewerOwner from "./components/ComplaintsViewerOwner";
import RoomDetailsOwner from "./components/RoomDetailsOwner";

function App() {
  // Sidebar
  const forAdmin = [
    "Home",
    "Tenant Details",
    "Owner Details",
    "Create owner",
    "Allotting Parking slot",
    "Complaints",
  ];
  const forEmployee = ["Home", "Complaints"];
  const forTenant = [
    "Home",
    "Raising Complaints",
    "Alloted Parking slot",
    "Pay maintenance",
  ];
  const forOwner = [
    "Home",
    "Tenant details",
    "Complaint",
    "Create Tenant",
    "Room Details",
  ];

  return (
    <div className="App font-mons background">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="/admin"
          element={
            <main>
              <Header forHam={[...forAdmin, "Logout"]} />
              <section className="flex">
                <Aside forHam={forAdmin} base={'admin'} />
                <Dashboard />
              </section>
            </main>
          }
        />
        <Route
          path="/employee"
          element={
            <main>
              <Header forHam={[...forEmployee, "Logout"]} />
              <section className="flex">
                <Aside forHam={forEmployee} base={'employee'} />
                <Dashboard />
              </section>
            </main>
          }
        />
        <Route
          path="/tenant"
          element={
            <main>
              <Header forHam={[...forTenant, "Logout"]} />
              <section className="flex">
                <Aside forHam={forTenant} base={'tenant'} />
                <Dashboard />
              </section>
            </main>
          }
        />
        <Route
          path="/owner"
          element={
            <main>
              <Header forHam={[...forOwner, "Logout"]} />
              <section className="flex">
                <Aside forHam={forOwner} base={'owner'} />
                <Dashboard />
              </section>
            </main>
          }
        />
        <Route
          path="/admin/ownerdetails"
          element={
            <main>
              <Header forHam={forAdmin} />
              <section className="dashboardSkeleton">
                <Aside forHam={forAdmin} base={'admin'} />
                <OwnerDetails />
              </section>
            </main>
          }
        />
        <Route
          path="/admin/tenantdetails"
          element={
            <main>
              <Header forHam={forAdmin} />
              <section className="dashboardSkeleton">
                <Aside forHam={forAdmin} base={'admin'} />
                <TenantDetails />
              </section>
            </main>
          }
        />
        <Route
          path="/admin/createowner"
          element={
            <main>
              <Header forHam={forAdmin} />
              <section className="dashboardSkeleton">
                <Aside forHam={forAdmin} base={'admin'} />
                <CreatingOwner />
              </section>
            </main>
          }
        />
        <Route
          path="/admin/allottingparkingslot"
          element={
            <main>
              <Header forHam={forAdmin} />
              <section className="dashboardSkeleton">
                <Aside forHam={forAdmin} base={'admin'} />
                <CreatingParkingSlot />
              </section>
            </main>
          }
        />
        <Route
          path="/admin/complaints"
          element={
            <main>
              <Header forHam={forAdmin} />
              <section className="dashboardSkeleton">
                <Aside forHam={forAdmin} base={'admin'} />
                <ComplaintsViewer />
              </section>
            </main>
          }
        />
        <Route
          path="/tenant/raisingcomplaints"
          element={
            <main>
              <Header forHam={forTenant} />
              <section className="dashboardSkeleton">
                <Aside forHam={forTenant} base={'tenant'} />
                <RaisingComplaints />
              </section>
            </main>
          }
        />
        <Route
          path="/tenant/allotedparkingslot"
          element={
            <main>
              <Header forHam={forTenant} />
              <section className="dashboardSkeleton">
                <Aside forHam={forTenant} base={'tenant'} />
                <ParkingSlot />
              </section>
            </main>
          }
        />
        <Route
          path="/tenant/paymaintenance"
          element={
            <main>
              <Header forHam={forTenant} />
              <section className="dashboardSkeleton">
                <Aside forHam={forTenant} base={'tenant'} />
                <PayMaintenance />
              </section>
            </main>
          }
        />
        <Route
          path="/owner/tenantdetails"
          element={
            <main>
              <Header forHam={forOwner} />
              <section className="dashboardSkeleton">
                <Aside forHam={forOwner} base={'owner'} />
                <RoomDetailsOwner />
              </section>
            </main>
          }
        />
        <Route
          path="/owner/complaint"
          element={
            <main>
              <Header forHam={forOwner} />
              <section className="dashboardSkeleton">
                <Aside forHam={forOwner} base={'owner'} />
                <ComplaintsViewerOwner />
              </section>
            </main>
          }
        />
        <Route
          path="/owner/createtenant"
          element={
            <main>
              <Header forHam={forOwner} />
              <section className="dashboardSkeleton">
                <Aside forHam={forOwner} base={'owner'} />
                <CreatingTenant />
              </section>
            </main>
          }
        />
        <Route
          path="/owner/roomdetails"
          element={
            <main>
              <Header forHam={forOwner} />
              <section className="dashboardSkeleton">
                <Aside forHam={forOwner} base={'owner'} />
                <RoomDetails />
              </section>
            </main>
          }
        />
        <Route
          path="/employee/complaints"
          element={
            <main>
              <Header forHam={forEmployee} />
              <section className="dashboardSkeleton">
                <Aside forHam={forEmployee} base={'employee'} />
                <ComplaintsViewer />
              </section>
            </main>
          }
        />
        <Route
          path="/*"
          element={
            <main>
              <ErrorPage />
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
