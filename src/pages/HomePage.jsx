import React from 'react'
import HelloWorld from '../components/HelloWorld'
import AllEmployeePage from './AllEmployeePage'

const HomePage = () => {
  return (
    <>
      <h1 className="directory-title">Employee Directory</h1>
      <AllEmployeePage />
    </>
  )
}
export default HomePage
