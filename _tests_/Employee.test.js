const Employee = require("..lib/employee");

describe(Employee, () => {
    it("should create new object with name, id, and email properties, and get[name, id, email, role] methods")
    const employee = new Employee("Bob", 1, "bob@bobmail.com")
    
    expect(employee.name).toEqual("Bob");
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual("bob@bobmail.com");

})