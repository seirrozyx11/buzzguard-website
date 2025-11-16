// ============================================
// WEBSITE CONFIGURATION
// ============================================

// API Configuration
const CONFIG = {
  // Backend API URLs
  API: {
    LOCAL: 'http://localhost:5000',
    PRODUCTION: 'https://buzzguard-feedback-api-latest.onrender.com'
  },
  
  // Website Information
  SITE: {
    NAME: 'BuzzGuard',
    VERSION: '1.0.0',
    DESCRIPTION: 'Next-Generation Mosquito Detection and Control System',
    TEAM: 'Assumption College of Davao',
    YEAR: '2025'
  },
  
  // Feature Flags
  FEATURES: {
    ANIMATIONS: true,
    FIREBASE_BACKUP: true,
    FEEDBACK_SYSTEM: true,
    DOWNLOAD_GATE: true,
    ANALYTICS: false
  },
  
  // Rate Limiting (Frontend)
  RATE_LIMITS: {
    FEEDBACK_COOLDOWN: 30000, // 30 seconds between submissions
    MAX_MESSAGE_LENGTH: 1000,
    MIN_MESSAGE_LENGTH: 10
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
} else {
  window.BUZZGUARD_CONFIG = CONFIG;
}