export type FreelanceRecord = {
  id: number
  date: string
  name: string
  location?: string
  entityType: 'Company' | 'Person'
  recordCategory: 'Application' | 'Partner Lead'
  status: string
}


export type FreelanceRecordCardProps = {
  id: number
  date: string
  name: string
  location?: string
  entityType: 'Company' | 'Person'
  recordCategory: 'Application' | 'Partner Lead'
  status: string
}
