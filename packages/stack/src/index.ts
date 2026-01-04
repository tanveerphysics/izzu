// IzzU Stack SDK v2.0
// Complete Authentication with Face ID, Email+Password, OTP, and Location Tracking

export { IzzUProvider, useIzzU } from "./IzzUProvider";
export { IzzUAuth } from "./IzzUAuth";

// Legacy export for backward compatibility
export { IzzUAuth as FaceAuth } from "./IzzUAuth";

// Types
export interface IzzUUser {
    id: string;
    email: string;
    faceVerified: boolean;
    location?: { lat: number; lng: number };
}

export interface IzzUConfig {
    projectId: string;
    apiKey: string;
    apiBaseUrl?: string;
}

// Helper for SDK version
export const SDK_VERSION = "2.0.0";
