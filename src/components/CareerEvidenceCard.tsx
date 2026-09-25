import type { CareerEvidenceCardProps } from '../types/CareerEvidence'


function CareerEvidenceCard({ item, onDelete }: CareerEvidenceCardProps) {
  return (
    <div>
      <p>Title: {item.title}</p>
      <p>Context: {item.context}</p>
      <p>Result: {item.result}</p>
      <p>Independence: {item.independence}</p>
      <button type='button' onClick={() => onDelete(item.id)}> Delete</button>
    </div >
  )
}

export default CareerEvidenceCard
