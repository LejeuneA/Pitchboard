export type FreelanceRecord = {
  id: number
  date: string
  name: string
  location?: string
  url?: string
  entityType: 'Company' | 'Person'
  recordCategory: 'Application' | 'Partner Lead'
  status: string
}


export type FreelanceRecordCardProps = {
  item: FreelanceRecord
  onDelete: (id: number) => void
  onEdit: (id: number) => void
}
