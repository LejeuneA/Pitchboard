import type { FollowUpCardProps } from '../types/FollowUp'


function FollowUpCard({ item, onDelete, onDone }: FollowUpCardProps) {
  return (
    <div>
      <p>Due Date: {item.dueDate}</p>
      <p>Title: {item.title}</p>
      <p>Related to: {item.relatedTo}</p>
      <p>Source: {item.source}</p>
      <p>Status: {item.status}</p>
      <button type='button' onClick={() => onDelete(item.id)}> Delete</button>
      <button type='button' onClick={() => onDone(item.id)}> Done</button>
    </div >
  )
}

export default FollowUpCard
