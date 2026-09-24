export type FreelanceRecord = {
  id: number
  name: string
  location?: string
  entityType: 'Company | Person'
  recordCategory: 'Application | Partner Lead'
  status: string
}
