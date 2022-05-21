import React from 'react'
import NavBar from './NavBar'
import Wallets from './Wallets'
import Expenses from './Expenses'
import Transactions from './Transactions'
import Overview from './Overview'
import ActivityLog from './ActivityLog'

export default function DashboardApp() {
  return (
    <div className='app'>
      <NavBar />
      <div className="app__grid">
        <div className="app__grid__1">
          <Wallets />
          <Expenses />
          <Transactions />
        </div>
        <div className="app__grid__2">
          <Overview />
          <ActivityLog />
        </div>
      </div>
    </div>
  )
}
