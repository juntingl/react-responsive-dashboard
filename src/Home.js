import { Link } from "react-router-dom";


function Home() {
  return (
    <div style={{
      padding: '20px'
    }}>
      <h1>Home</h1>
      <nav style={
        {
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }
      }>
        <Link to="/0001" >Page0001</Link>
        <Link to="/0002" >Page0002</Link>
      </nav>
    </div>
  )
}

export default Home