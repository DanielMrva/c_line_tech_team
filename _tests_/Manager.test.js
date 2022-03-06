const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager")

describe("Manager", () => {
    it("should create new object with name, id, and email properties, and get[name, id, email, role] methods", () => {
    const manager = new Manager("Mark", 2, "mark@markmail.com", 214)

    
    expect(manager.name).toEqual("Mark");
    expect(manager.id).toEqual(2);
    expect(manager.email).toEqual("mark@markmail.com");
    expect(manager.officeNumber).toEqual(214);
    })
})