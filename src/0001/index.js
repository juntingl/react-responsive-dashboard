import "./scss/styles.scss"
import DashboardApp from './components/DashboardApp'
import Sidebar from './components/Sidebar'

function Page0001() {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <DashboardApp />
      </div>
      <div className="shapes__1"></div>
      <div className="shapes__2"></div>
      <div className="shapes__3"></div>
    </>
  );
}

export default Page0001;
