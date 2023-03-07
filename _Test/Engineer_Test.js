// Import Engineer Info
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  
  describe("Engineer object instantiation", () => {
    it("creates an object with name, id, email, and github properties", () => {
      const engineer = new Engineer("Deka Ali", 93, "Deka.ali93@gmail.com", "dekaali_93");

      expect(engineer).toBeInstanceOf(Engineer);
      expect(engineer.name).toEqual("Deka Ali");
      expect(engineer.id).toEqual(93);
      expect(engineer.email).toEqual("Deka.ali93@gmail.com");
      expect(engineer.github).toEqual("dekaali_93");
    });
  });

  describe("getName", () => {
    it("returns the object's name property", () => {
      const engineer = new Engineer("Deka Ali", 1, "Deka.ali93@gmail.com", "dekaali_93");

      expect(engineer.getName()).toEqual("Deka Ali");
    });
  });

  describe("getId", () => {
    it("returns the object's id property", () => {
      const engineer = new Engineer("Deka Ali", 1, "Deka.ali93@gmail.com", "dekaali_93");

      expect(engineer.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("returns the object's email property", () => {
      const engineer = new Engineer("Deka Ali", 1, "Deka.ali93@gmail.com", "dekaali_93");

      expect(engineer.getEmail()).toEqual("janedoe@gmail.com");
    });
  });

  describe("getGithub", () => {
    it("returns the object's github property", () => {
      const engineer = new Engineer("Deka Ali", 1, "Deka.ali93@gmail.com", "dekaali_93");

      expect(engineer.getGithub()).toEqual("dekaali_93");
    });
  });

  describe("getRole", () => {
    it("returns the string 'Engineer'", () => {
      const engineer = new Engineer("Deka Ali", 1, "Deka.ali93@gmail.com", "dekaali_93");

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
