function createLoginTracker(userInfo) {
let attemptCount = 0;
    
    const login = (passwordAttempt) => {
        // Check if account is already locked BEFORE incrementing
        if (attemptCount >= 3) {
            return "Account locked due to too many failed login attempts";
        }
        
        // Increment attempt count
        attemptCount++;
        
        // Check if password matches
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        }
        
        // Password doesn't match - return failure message in correct format
        return `Attempt ${attemptCount}: Login failed`;
    };
    
    return login;
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};