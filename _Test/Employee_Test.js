// Import Employee Info
const Employee = require("../lib/Employee");

describe("Employee class", () => {
  describe("Instantiation", () => {
    it("should create an object with name, id, and email properties", () => {
      const employee = new Employee("Calvin Germain", 4, "calvingermain4@gmail.com");

      expect(employee).toBeInstanceOf(Employee);
      expect(employee.name).toEqual("Calvin Germain");
      expect(employee.id).toEqual(4);
      expect(employee.email).toEqual("calvingermain4@gmail.com");
    });
  });

  describe("getName method", () => {
    it("should return the employee's name", () => {
      const employee = new Employee("Calvin Germain", 4, "calvingermain4@gmail.com");

      expect(employee.getName()).toEqual("Calvin Germain");
    });
  });

  describe("getID method", () => {
    it("should return the employee's ID", () => {
      const employee = new Employee("Calvin Germain", 4, "calvingermain4@gmail.com");

      expect(employee.getID()).toEqual(4);
    });
  });

  describe("getEmail method", () => {
    it("should return the employee's email", () => {
      const employee = new Employee("Calvin Germain", 4, "calvingermain4@gmail.com");

      expect(employee.getEmail()).toEqual("calvingermain4@gmail.com");
    });
  });

  describe("getRole method", () => {
    it("should return the string 'Employee'", () => {
      const employee = new Employee("calvingermain4@gmail.com", 4, "calvingermain4@gmail.com");

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});

