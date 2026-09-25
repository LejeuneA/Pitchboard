export type FreelanceRecord = {
  id: number
  title: string
  context: string
  result: string
  independence: 'Independent' | 'Assisted' | 'Team'
}
