export interface Education {
  level?: string;
  specialty: string;
  school: string;
  start: Date;
  end?: Date;
  country?: string;
  url?: string;
  isOngoing: boolean;
}
