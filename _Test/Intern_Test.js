// Import Intern Info
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern class", () => {
  describe("constructor", () => {
    it("should create an Intern object with name, id, email, and school properties", () => {
      const intern = new Intern("Fatuma Ali", 54, "Fatuma.ali54@gmail.com", "MacEwan University");

      expect(intern).toBeInstanceOf(Intern);
      expect(intern.name).toBe("Fatuma Ali");
      expect(intern.id).toBe(54);
      expect(intern.email).toBe("Fatuma.ali54@gmail.com");
      expect(intern.school).toBe("MacEwan University");
    });
  });

  describe("getName method", () => {
    it("should return the name property of the Intern object", () => {
      const intern = new Intern("Fatuma Ali", 54, "Fatuma.ali54@gmail.com", " MacEwan University");

      expect(intern.getName()).toBe("Fatuma Ali");
    });
  });

  describe("getID method", () => {
    it("should return the id property of the Intern object", () => {
      const intern = new Intern("Fatuma Ali", 54, "Fatuma.ali54@gmail.com", "MacEwan University");

      expect(intern.getID()).toBe(1);
    });
  });

  describe("getEmail method", () => {
    it("should return the email property of the Intern object", () => {
      const intern = new Intern("Fatuma Ali", 54, "Fatuma.ali54@gmail.com", "MacEwan University");

      expect(intern.getEmail()).toBe("Fatuma.ali54@gmail.com");
    });
  });

  describe("getSchool method", () => {
    it("should return the school property of the Intern object", () => {
      const intern = new Intern("Fatuma Ali", 54, "Fatuma.ali54@gmail.com", "MacEwan University");

      expect(intern.getSchool()).toBe("MacEwan University");
    });
  });

  describe("getRole method", () => {
    it("should return 'Intern'", () => {
      const intern = new Intern("Fatuma Ali", 54, "Fatuma.ali54@gmail.com", "MacEwan University");

      expect(intern.getRole()).toBe("Intern");
    });
  });
});


