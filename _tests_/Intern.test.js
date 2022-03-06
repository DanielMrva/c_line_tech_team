const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern")

describe("Intern", () => {
    it("should create new object with name, id, and emaiinternties, and get[name, id, email, role] methods", () => {
    const intern = new Intern("Mary", 4, "Mary@Janemail.com", "CUNY")

    
    expect(intern.name).toEqual("Mary");
    expect(intern.id).toEqual(4);
    expect(intern.email).toEqual("Mary@Janemail.com");
    expect(intern.school).toEqual("CUNY");
    })
})