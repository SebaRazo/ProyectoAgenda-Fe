export interface Contact {
  id: number;
  name: string;
  celularNumber?: number;
  telephoneNumber?: number;
  description?: string;
}

export interface ContactJsonPlaceholder {
  id?: number;
  name?: string;
  celularNumber?: number;
  telephoneNumber?: number;
  description?: string;
}

export interface CallInfoDto {
  countCall: number;
  timeCall: string;
}
