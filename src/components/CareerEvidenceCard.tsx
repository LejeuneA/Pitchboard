import type { CareerEvidenceCardProps } from '../types/CareerEvidence'


function CareerEvidenceCard({ item, onDelete }: CareerEvidenceCardProps) {
  return (
    <div className="career-card">
      <div className="card-information">
        <p>Title: {item.title}</p>
        <p>Context: {item.context}</p>
        <p>Result: {item.result}</p>
        <p>Independence: {item.independence}</p>
      </div>
      <div className="card-actions">
        <button type='button' onClick={() => onDelete(item.id)}> Delete</button>
      </div>
    </div >
  )
}

export default CareerEvidenceCard
