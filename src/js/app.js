export default class Validator {
    constructor(name) {
      this.name = name;
    }
  
    validateUsername() {
      if (/^[\d-_]/.test(this.name)) {
        return false;
      }
  
      if (/[\d-_]$/.test(this.name)) {
        return false;
      }
  
      if (/\d{4,}/.test(this.name)) {
        return false;
      }
  
      if (/^[a-zA-Z\-_0-9]+$/.test(this.name)) {
        return true;
      }
  
      return false;
    }
  }