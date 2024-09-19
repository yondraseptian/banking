import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

function Home() {
    const loggedIn = {firstName : 'Yondra', lastName: 'Septian', email: 'yondra@me.com'}
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn.firstName || 'guest'}
                    subtext="Access and manage your account and transactions"
                />

                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                />
            </header>

            RECENT TRANSACTION
        </div>

        <RightSidebar 
            user = {loggedIn}
            transactions = {[]}
            banks = {[{ currentBalance: 1250.35}, {currentBalance: 1250.35}]}
        />
    </section>
  )
}

export default Home