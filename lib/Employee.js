class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email

    }

    getName(name) {
        console.log(this.name);
        return this.name
    }

    getId(id) {
        console.log(this.id);
        return this.id;
    }

    getEmail(email) {
        console.log(this.email)
    }

    getRole() {
        return "Employee";
    }
}