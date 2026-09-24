import { freelanceRecords } from './data/freelanceRecords'

function App() {

  return (
    <>
      <h1>Pitchboard</h1>

      {freelanceRecords.map((record) =>
        <div key={record.id}>
          <p>Name: {record.name}</p>
          <p>Status: {record.status}</p>
        </div>)}
    </>
  )
}

export default App
