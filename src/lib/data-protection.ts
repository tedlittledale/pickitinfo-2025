export class DataProtectionManager {
  static initialize() {
    // Initialize data protection system
    console.log("Data protection system initialized");
  }

  static async requestDataDeletion(email: string, reason?: string) {
    // Call the account deletion API route
    const response = await fetch("/api/account-deletion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        reason,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to submit deletion request");
    }

    const result = await response.json();
    console.log("Data deletion requested successfully:", result);
    return result;
  }

  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static isCookieAccepted(category: string): boolean {
    // Simulate cookie consent check
    return localStorage.getItem(`cookie-consent-${category}`) === "true";
  }

  static async requestDataExport(email: string) {
    // Simulate data export request
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log("Data export requested for:", email);
        resolve();
      }, 1000);
    });
  }

  static getDataRetentionInfo() {
    return {
      personal: "2 years",
      analytics: "1 year",
      marketing: "6 months",
    };
  }
}

export const useDataProtection = () => {
  return {
    requestDataDeletion: DataProtectionManager.requestDataDeletion,
    isValidEmail: DataProtectionManager.isValidEmail,
    getCookieConsent: (category: string) =>
      DataProtectionManager.isCookieAccepted(category),
    updateCookieConsent: (category: string, accepted: boolean) => {
      localStorage.setItem(`cookie-consent-${category}`, accepted.toString());
    },
    requestDataExport: DataProtectionManager.requestDataExport,
    getDataRetentionInfo: DataProtectionManager.getDataRetentionInfo,
  };
};
