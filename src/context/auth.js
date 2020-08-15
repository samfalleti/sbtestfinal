class Auth {
    constructor() {
      this.isAuthenticated = false;
    }
    login() {
      this.isAuthenticated = true;
    }
    logout() {
      this.isAuthenticated = false;
    }
    isUserAuthenticated() {
      return this.isAuthenticated;
    }
  }
  
  export default new Auth();
  