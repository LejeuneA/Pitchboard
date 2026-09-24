import type { FreelanceRecordCardProps } from '../types/FreelanceRecord'

function FreelanceRecordCard(props: FreelanceRecordCardProps) {
  return (
  <p>Name: {props.name}</p>
  <p>Status: {props.statut}</p>
  )
}
