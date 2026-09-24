// App.tsx
import { freelanceRecords } from './data/freelanceRecords'
import FreelanceRecordCard from './components/FreelanceRecordCard'

function App() {
  return (
    <>
      <h1>Pitchboard</h1>

      {freelanceRecords.map((record) =>
        <div key={record.id}>
          <FreelanceRecordCard record={record} />
        </div>
      )}
    </>
  )
}

export default App
