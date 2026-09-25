export type CareerEvidence = {
  id: number
  title: string
  context: string
  result: string
  independence: 'Independent' | 'Assisted' | 'Team'
}


export type CareerEvidenceCardProps = {
  item: CareerEvidence
  onDelete: (id: number) => void
}
