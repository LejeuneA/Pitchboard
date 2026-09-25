export type JobApplication = {
  id: number
  date: string
  name: string
  location?: string
  url?: string
  employmentType: 'Full time' | 'Part time'
  workMode: 'On-site' | 'Hybrid' | 'Remote'
  status: string
}


export type JobApplicationCardProps = {
  item: JobApplication
  onDelete: (id: number) => void
}
