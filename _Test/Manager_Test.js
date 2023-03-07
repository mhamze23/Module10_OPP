// Import Manager Info
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager class", () => {
  describe("constructor", () => {
    it("should create an instance of Manager with name, id, email, and officeNumber properties", () => {
      const manager = new Manager("Hamze Mohamed", 23, "mHamze2394@gmail.com", 455);

      expect(manager).toBeInstanceOf(Manager);
      expect(manager.name).toEqual("Hamze Mohamed");
      expect(manager.id).toEqual(23);
      expect(manager.email).toEqual("mHamze2394@gmail.com");
      expect(manager.officeNumber).toEqual(455);
    });
  });

  describe("getName method", () => {
    it("should return the name of the manager", () => {
      const manager = new Manager("Hamze Mohamed", 23, "mHamze2394@gmail.com", 455);

      expect(manager.getName()).toEqual("Hamze Mohamed");
    });
  });

  describe("getId method", () => {
    it("should return the ID of the manager", () => {
      const manager = new Manager("Hamze Mohamed", 23, "mHamze2394@gmail.com", 455);

      expect(manager.getId()).toEqual(1);
    });
  });

  describe("getEmail method", () => {
    it("should return the email of the manager", () => {
      const manager = new Manager("Hamze Mohamed", 23, "mHamze2394@gmail.com", 455);

      expect(manager.getEmail()).toEqual("mHamze2394@gmail.com");
    });
  });

  describe("getOfficeNumber method", () => {
    it("should return the office number of the manager", () => {
      const manager = new Manager("Hamze Mohamed", 23, "mHamze2394@gmail.com", 455);

      expect(manager.getOfficeNumber()).toEqual(50);
    });
  });

  describe("getRole method", () => {
    it("should return the role of the manager", () => {
      const manager = new Manager("Hamze Mohamed", 23, "mHamze2394@gmail.com", 455);

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
