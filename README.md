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

<details>
  <summary>Click to view Table of Contents</summary>

- Project Description
- Tech Stack
- Basic Structure
  - Functionalities
  - ER Diagram
  - Screenshots of the Interface
- How to Run
</details>

# Project Description

In this project we created a Apartment management system with user interface and database support.This project is a part of our curriculum, here we solved the problem of manual entry of data in apartments by creating user interface and storing data in mysql database.

# Tech Stack

<img src="https://img.shields.io/badge/react-7c3aed?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
<img src="https://img.shields.io/badge/tailwindcss-7c3aed?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailWind CSS"/>
<img src="https://img.shields.io/badge/express-7c3aed?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
<img src="https://img.shields.io/badge/mysql-7c3aed?style=for-the-badge&logo=mysql&logoColor=white" alt="Mysql"/>

- Frontend - React JS, Tailwind css
- Backend - NodeJS, ExpressJS
- Database - MySql

# Basic Structure

## Functionalities

<details>
  <summary>click to view Functionalities</summary>
  
- Admin
  - Admin can login.
  - Admin can view the tenant and owner details.
  - Admin can create owner.
  - _Admin can delete owner._
  - _Admin can delete tenent._
  - Admin can allot parking slot.
  - Admin can view the complaints.
  - _Admin can delete the complaints._
  - Admin can see Dashboard.
- Owner
  - Owner can see the Tenant details of his/her owned room.
  - Owner can create Tenant.
  - Owner can see the complaints from his/her owned room.
  - Owner can see the Room Details.
  - Owner can see Dashboard.
- Tenant
  - Tenant can see the alloted parking slot.
  - Tenant can pay maintenance fee.
  - Tenant can raise complaints.
  - Tenant can see his/her Dashboard.

- Employee

  - Employee can see all the complaints.
  - Employee can see Total number of Complaints

- All the admins, owners, tenant, employees can login and logout.

</details>

## ER Diagram

<details>
  <summary>Click to view ER diagram</summary>
<kbd><img src="assets/er-diagram.png" width="800px"></kbd>
</details>

## Screenshots of the Implementation

### Admin dashboard

<kbd><img src="assets/admin.png" alt="admin-dashboard" width="800px"></kbd>

### Owner dashboard

<kbd><img src="assets/owner.png" alt="owner-dashboard" width="800px"></kbd>

### Tenant dashboard

<kbd><img src="assets/tenant.png" alt="tenant-dashboard" width="800px"></kbd>

### Employee dashboard

<kbd><img src="assets/employee.png" alt="employee-dashboard" width="800px"></kbd>

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
