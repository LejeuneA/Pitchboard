import type { JobApplication } from '../types/JobApplication'

export const jobApplicationRecords: JobApplication[] = [
  {
    id: 1,
    date: '20.09.2026',
    name: 'Northstar Digital',
    location: 'London, UK',
    url: 'https://example.com/jobs/northstar',
    employmentType: 'Full time',
    workMode: 'Remote',
    status: 'Applied',
  },

  {
    id: 2,
    date: '21.09.2026',
    name: 'Pixel Forge',
    location: 'Brussels, Belgium',
    url: 'https://example.com/jobs/pixelforge',
    employmentType: 'Full time',
    workMode: 'Hybrid',
    status: 'Waiting for reply',
  },

  {
    id: 3,
    date: '22.09.2026',
    name: 'Studio Atlas',
    location: 'Amsterdam, Netherlands',
    employmentType: 'Part time',
    workMode: 'Remote',
    status: 'Applied',
  },

  {
    id: 4,
    date: '23.09.2026',
    name: 'Brightform',
    location: 'Liège, Belgium',
    url: 'https://example.com/jobs/brightform',
    employmentType: 'Part time',
    workMode: 'On-site',
    status: 'Interview',
  },

  {
    id: 5,
    date: '24.09.2026',
    name: 'Waveframe',
    location: 'Paris, France',
    employmentType: 'Full time',
    workMode: 'Hybrid',
    status: 'Rejected',
  },

  {
    id: 6,
    date: '25.09.2026',
    name: 'Blue Circuit',
    location: 'Remote Europe',
    url: 'https://example.com/jobs/blue-circuit',
    employmentType: 'Full time',
    workMode: 'Remote',
    status: 'Applied',
  },
]
