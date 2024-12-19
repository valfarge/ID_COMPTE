import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { BettingPage } from './pages/BettingPage'
import { DocumentsPage } from './pages/DocumentsPage'
import { DepositPage } from './pages/DepositPage'
import { LimitsPage } from './pages/LimitsPage'
import { ProfilePage } from './pages/ProfilePage'
import { AutoExclusionPage } from './pages/AutoExclusionPage'
import { WithdrawalPage } from './pages/WithdrawalPage'

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<BettingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/deposit" element={<DepositPage />} />
          <Route path="/withdrawal" element={<WithdrawalPage />} />
          <Route path="/limits" element={<LimitsPage />} />
          <Route path="/auto-exclusion" element={<AutoExclusionPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}