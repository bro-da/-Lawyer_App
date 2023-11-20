import React from 'react'
import CaseList from '../../components/case/CaseList'
import SideBar from '../../components/common/sidebar/SideBar'
import Header from '../../components/common/header/Header'

const AllCaseListPage = () => {
  return (
    <div className="main-wrapper">
<Header/>
      <SideBar/>
      <div className="page-wrapper">
      <CaseList />
   
    </div>
    </div>
  )
}

export default AllCaseListPage