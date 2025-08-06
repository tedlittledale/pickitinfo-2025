export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Route {
  id: string;
  userId: string;
  title: string;
  description?: string;
  path: Array<{ lat: number; lng: number; timestamp: Date }>;
  distance: number;
  duration: number;
  itemsCollected: number;
  beforePhotos: string[];
  afterPhotos: string[];
  status: "in_progress" | "completed" | "verified";
  createdAt: Date;
  updatedAt: Date;
}

export interface Community {
  id: string;
  name: string;
  description: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  memberCount: number;
  totalRoutes: number;
  totalItemsCollected: number;
  createdAt: Date;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  type: "individual" | "team" | "community";
  startDate: Date;
  endDate: Date;
  target: {
    type: "routes" | "items" | "distance" | "participants";
    value: number;
  };
  reward?: {
    type: "badge" | "points" | "recognition";
    value: string | number;
  };
  participants: number;
  status: "upcoming" | "active" | "completed";
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: "distance" | "frequency" | "community" | "environmental";
  requirements: {
    type: string;
    value: number;
  };
  rarity: "common" | "uncommon" | "rare" | "legendary";
  unlockedAt?: Date;
}

export interface ImpactStats {
  totalRoutes: number;
  totalDistance: number;
  totalItemsCollected: number;
  totalTimeSpent: number;
  co2Saved: number;
  communitiesHelped: number;
  achievementsUnlocked: number;
  currentStreak: number;
  longestStreak: number;
}

// Google Analytics gtag types
declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "set" | "consent",
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export {};
