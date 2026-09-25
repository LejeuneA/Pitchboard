export type CareerEvidence = {
  id: number
  date: string
  name: string
  location?: string
  url?: string
  entityType: 'Company' | 'Person'
  recordCategory: 'Application' | 'Partner Lead'
  status: string
}
