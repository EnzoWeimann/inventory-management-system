# 📦 Inventory NG (Frontend Angular)

This is the **frontend** of the Inventory Management System app, developed with **Angular**. Allows you to add, edit, list, and delete products by connecting to a Spring Boot backend.

---

## 🚀 Tech stack

- [Angular 17](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- Bootstrap 
- Angular Router
- Form validation with `FormsModule`

---

## 🔧 Installation and execution

1. Clone the repository and enter the frontend folder:

```bash
git clone https://github.com/EnzoWeimann/inventory-management-system.git
cd Inventory Management System\inventory-ng
```

2. Install dependencies:
```bash
npm install
```

3. Run the app:
```bash
ng serve -o
```
It should open the browser at http://localhost:4200.

If you can't see the products, the backend server needs to be started. See inventory-app/REAMDE.md.

If this is the case, you should see something like this:
![Screenshot](../assets/no-backend.png)

---

## ✅ Form validations

The forms for adding and editing products include **frontend validations** equivalent to those defined in the backend (JPA):

| Field       | Validation                                      |
|-------------|-------------------------------------------------|
| Description | Required, minimum 2 characters, maximum 100     |
| Price       | Required, must be greater than or equal to 0    |
| Stock       | Required, must be an integer ≥ 0                |

If any field does not meet the validations, the **Add** button is disabled.  
Additionally, error messages are shown to the user when completing each field.

---

## 📁 Documentation

**Compodoc** was used to generate the code documentation.
You can view the comments in each file, or you can generate the corresponding documentation locally using:
```bash
npm run docs
```
This will serve the documentation at http://localhost:5500/documentation