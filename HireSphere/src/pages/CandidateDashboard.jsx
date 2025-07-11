import React from 'react';
import '../styles/CandidateDashboard.css';
import CandidateNavbar from '../components/CandidateDashboard/CandidateNavbar';
import CandidateUpcomingInterview from '../components/CandidateDashboard/CandidateUpcomingInterview';
import CandidateSidebar from '../components/CandidateDashboard/CandidateSidebar';
import CandidateBookingsTable from '../components/CandidateDashboard/CandidateBookingsTable';



const CandidateDashboard = () => {
  return (
    <div>
        <CandidateNavbar />
        <h1>CandidateDashboard</h1>
        <CandidateUpcomingInterview />
        <CandidateSidebar />
        <CandidateBookingsTable />

    </div>
  )
}

export default CandidateDashboard;