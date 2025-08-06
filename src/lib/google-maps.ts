export const GOOGLE_MAPS_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  libraries: ['places', 'geometry'] as const,
  region: 'GB',
  language: 'en-GB',
}

export interface MapMarker {
  id: string
  position: { lat: number; lng: number }
  title: string
  type: 'cleaned' | 'needs_attention' | 'in_progress'
  description?: string
  photos?: string[]
}

export interface RouteData {
  id: string
  path: Array<{ lat: number; lng: number }>
  startTime: Date
  endTime: Date
  distance: number
  itemsCollected: number
  beforePhotos: string[]
  afterPhotos: string[]
}

export const DEFAULT_MAP_OPTIONS = {
  center: { lat: 51.5074, lng: -0.1278 }, // London
  zoom: 10,
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
    {
      featureType: 'transit',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
  ],
}

export const MARKER_COLORS = {
  cleaned: '#22c55e',
  needs_attention: '#ef4444',
  in_progress: '#f59e0b',
} as const

export function createMarkerIcon(type: keyof typeof MARKER_COLORS) {
  return {
    path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z',
    fillColor: MARKER_COLORS[type],
    fillOpacity: 1,
    strokeColor: '#ffffff',
    strokeWeight: 2,
    scale: 1.5,
  }
}

export function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371e3 // Earth's radius in metres
  const φ1 = (lat1 * Math.PI) / 180
  const φ2 = (lat2 * Math.PI) / 180
  const Δφ = ((lat2 - lat1) * Math.PI) / 180
  const Δλ = ((lng2 - lng1) * Math.PI) / 180

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c // Distance in metres
}