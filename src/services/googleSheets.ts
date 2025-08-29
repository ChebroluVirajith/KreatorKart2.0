import { GOOGLE_CONFIG } from '../config/googleConfig';
import { UserData } from '../types/auth';

interface SheetRow {
  timestamp: string;
  email: string;
  name: string;
  username: string;
  bio?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
}

export class GoogleSheetsService {
  private static baseUrl = 'https://sheets.googleapis.com/v4/spreadsheets';
  private static apiKey = GOOGLE_CONFIG.sheets.apiKey;
  private static spreadsheetId = GOOGLE_CONFIG.sheets.spreadsheetId;

  static async getAllResponses(): Promise<SheetRow[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/${this.spreadsheetId}/values/${GOOGLE_CONFIG.sheets.range}?key=${this.apiKey}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data from Google Sheets');
      }

      const data = await response.json();
      const rows = data.values || [];

      // Skip header row and convert to objects
      return rows.slice(1).map((row: string[]) => ({
        timestamp: row[0],
        email: row[1],
        name: row[2],
        username: row[3],
        bio: row[4],
        instagram: row[5],
        youtube: row[6],
        tiktok: row[7]
      }));
    } catch (error) {
      console.error('Error fetching responses:', error);
      throw error;
    }
  }

  static async getUserByEmail(email: string): Promise<UserData | null> {
    try {
      const responses = await this.getAllResponses();
      const userResponse = responses.find(row => row.email === email);

      if (!userResponse) {
        return null;
      }

      return {
        email: userResponse.email,
        name: userResponse.name,
        username: userResponse.username,
        bio: userResponse.bio,
        socialLinks: {
          instagram: userResponse.instagram,
          youtube: userResponse.youtube,
          tiktok: userResponse.tiktok
        }
      };
    } catch (error) {
      console.error('Error finding user:', error);
      return null;
    }
  }
}