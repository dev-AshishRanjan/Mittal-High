![Mittal-High](https://socialify.git.ci/dev-AshishRanjan/Mittal-High/image?description=1&font=KoHo&forks=1&issues=1&language=1&owner=1&pulls=1&stargazers=1&theme=Auto)

<div align="center">
 <p>
   
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)
![Visitors](https://api.visitorbadge.io/api/visitors?path=dev-AshishRanjan%2FMittal-High%20&countColor=%23263759&style=flat)
![GitHub forks](https://img.shields.io/github/forks/dev-AshishRanjan/Mittal-High)
![GitHub Repo stars](https://img.shields.io/github/stars/dev-AshishRanjan/Mittal-High)
![GitHub contributors](https://img.shields.io/github/contributors/dev-AshishRanjan/Mittal-High)
![GitHub last commit](https://img.shields.io/github/last-commit/dev-AshishRanjan/Mittal-High)
  
![GitHub repo size](https://img.shields.io/github/repo-size/dev-AshishRanjan/Mittal-High)

![Github](https://img.shields.io/github/license/dev-AshishRanjan/Mittal-High)
![GitHub issues](https://img.shields.io/github/issues/dev-AshishRanjan/Mittal-High)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/dev-AshishRanjan/Mittal-High)
![GitHub pull requests](https://img.shields.io/github/issues-pr/dev-AshishRanjan/Mittal-High)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/dev-AshishRanjan/Mittal-High)

 </p>
</div>

<p align="center">
  <img align="center" src="https://readme-typing-svg.herokuapp.com?color=%23${textVal}&lines=+👋🏻+Welcome+to+Mittal-High+👋🏻;👨🏻‍💻+Lets+Build+Together+👩🏻‍💻;💡+A+DBMS+Project+💡;🌐+Check+our+Website+🌐;🙏🏻+Thanks+for+Contributing+🙏🏻"
 <img src= 'https://capsule-render.vercel.app/api?type=rect&color=gradient&height=2.5'/>
</p>

# Mittal-High

We created this project as a part of Database Management System Course.

# Contents

- Project Description
- Basic Structure
  - Functionalities
  - ER Diagram
  - Database Schema
  - Screenshots of the Interface
- Tech Stack
- How to Run
- Contributors

# Project Description

In this project we created a Apartment management system with user interface and database support.This project is a part of our curriculum, here we solved the problem of manual entry of data in apartments by creating user interface and storing data in mysql database.

# Basic Structure

## Functionalities

- Admin
  - Admin can login.
  - Admin can view the tenant and owner details.
  - Admin can create owner.
  - Admin can allot parking slot.
  - Admin can view the complaints.
  - Admin can see total Owners.
  - Admin can see total Tenants.
  - Admin can see total Employee.
- Owner
  - Owner can see the Tenant details of his/her owned room.
  - Owner can create Tenant.
  - Owner can see the complaints from his/her owned room.
  - Owner can see the Room Details.
  - Owner can see Total Complaint.
  - Owner can see Number of Employee.
- Tenant

  - Tenant can see the alloted parking slot.
  - Tenant can pay maintenance fee.
  - Tenant can raise complaints.
  - Tenant can see his/her Tenant id.
  - Tenant can see his/her Name.
  - Tenant can see his/her Age.
  - Tenant can see his/her DOB.
  - Tenant can see his/her Room no.

- Employee

  - Employee can see all the complaints.
  - Employee can see Total number of Complaints

- All the admins, owners, tenant, employees can login and logout.

## ER Diagram

<kbd><img src="assets/er-diagram.png" width="800px"></kbd>

## Database Schema

<kbd><img src="assets/schema.png" alt="database-schema" width="800px"></kbd>

## Screenshots of the Implementation

### Admin dashboard

<kbd><img src="assets/admin.png" alt="admin-dashboard" width="800px"></kbd>

### Owner dashboard

<kbd><img src="assets/owner.png" alt="owner-dashboard" width="800px"></kbd>

### Tenant dashboard

<kbd><img src="assets/tenant.png" alt="tenant-dashboard" width="800px"></kbd>

### Employee dashboard

<kbd><img src="assets/employee.png" alt="employee-dashboard" width="800px"></kbd>

# Tech Stack

- Frontend - HTML5, Tailwind css, React JS
- Backend - NodeJS, ExpressJS
- Database - MySql

# How to Run

- First, clone the github repo
- Then, install the dependencies by opening the terminal with path as that of cloned github folder and do the following

  - For Client side, cd client

          npm install

  - For Server side, cd server

          npm install

- Install MySql workbench if you don't have one, and then import the export.sql file under database folder in workbench.

- Then in server folder create a file "config_sql.js" add localhost name, database name, username and password of your sql workbench and export it.

- Now to run, type the following

  - For client,

          npm run start

  - For sever,
    npm run start

- Now, you can use the project.

`Thank you!🧑‍💻`
