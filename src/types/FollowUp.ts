export type FollowUp = {
  id: number
  dueDate: string
  title: string
  relatedTo: string
  source: 'Job Application' | 'Freelance'
  status: 'Pending' | 'Done'
}


