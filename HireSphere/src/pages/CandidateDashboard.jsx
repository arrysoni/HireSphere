import React from 'react';
import CandidateNavbar from '../components/CandidateDashboard/CandidateNavbar';
import CandidateUpcomingInterview from '../components/CandidateDashboard/CandidateUpcomingInterview';
import CandidateSidebar from '../components/CandidateDashboard/CandidateSidebar';
import CandidateBookingsTable from '../components/CandidateDashboard/CandidateBookingsTable';



const CandidateDashboard = () => {
  return (
    <div>
        <h1>CandidateDashboard</h1>
        <CandidateNavbar />
        <CandidateUpcomingInterview />
        <CandidateSidebar />
        <CandidateBookingsTable />

    </div>
  )
}

export default CandidateDashboard