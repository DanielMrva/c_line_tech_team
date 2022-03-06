const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    it("should create new object with name, id, and email properties, and get[name, id, email, role] methods", () => {
    const engineer = new Engineer("Sally", 3, "sally@joemail.com", "SallyJoe")

    
    expect(engineer.name).toEqual("Sally");
    expect(engineer.id).toEqual(3);
    expect(engineer.email).toEqual("sally@joemail.com");
    expect(engineer.github).toEqual("SallyJoe");
    })
})