export interface Conference {
  id: number;
  name: string;
  date: string;
  location: string;
}

export const CONFERENCES: Conference[] = [
  {
    id: 1,
    name: 'Conference 1',
    date: '2023-01-15',
    location: 'New York',
  },
  {
    id: 2,
    name: 'Conference 2',
    date: '2023-02-20',
    location: 'Los Angeles',
  },
  {
    id: 3,
    name: 'Conference 3',
    date: '2023-03-10',
    location: 'Chicago',
  },
];
