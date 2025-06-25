# 🔧 Inventory App (Backend Spring Boot)

This is the **backend** of the Inventory Management Application, developed with **Spring Boot**.
Exposes a REST API for performing CRUD operations on products. <br/>
The application connects to a MySQL database where all product data is stored persistently. It uses JPA with Hibernate to map Java objects to database tables.<br/>
If the database does not exist, it is created automatically. On application startup, the database schema is automatically updated **inventory-app/src/main/resources/data.sql**.<br/>
Data validation is implemented on both the backend and frontend to ensure data integrity.

---

## 🚀 Tech stack

- Java 21
- Spring Boot
- Spring Data JPA
- Hibernate Validator
- Maven
- MySQL

---

## 🔧 Installation and execution

1. Clone the repository and enter the backend folder:

```bash
git clone https://github.com/EnzoWeimann/inventory-management-system.git
cd Inventory Management System\inventory-app
```

2. Run the server:
```bash
./mvnw spring-boot:run
```
Or you can just run the InventoryApplication.java class.
The API will be available at: http://localhost:8080.

---

## 🛢️ Database Configuration

The application connects to a MySQL database using the following default settings:
```bash
URL: jdbc:mysql://localhost:3306/inventario_db?createDatabaseIfNotExist=true
Username: root
Password: admin
```
*You should have MySQL in your PC, and if your credentials differ, update them in **src/main/resources/application.properties**.</br>
The database **inventario_db** will be created automatically on startup if it doesn't exist.<br/>

---

## 🧪 Sample Data

Upon startup, the application loads test data automatically from this file:
```bash
src/main/resources/data.sql
```
This script inserts sample products into the database so that the frontend can display content immediately.
You can edit or remove this file to change the default data.

---

## 📄 Documentation

**Javadoc** was used to generate the code documentation.
You can view the comments in each file, or you can generate the corresponding documentation locally using:
```bash
javadoc -d docs -sourcepath src/main/java -subpackages com.enzow.inventory
```
The generated site will be saved in the /docs folder.
