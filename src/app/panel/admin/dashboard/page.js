import React from 'react'
import StatisticsBox from './_components/StatisticsBox'
import AllRequestsBox from './_components/AllRequestsBox'
import EntryExitStatisticsBox from './_components/EntryExitStatisticsBox'
import ToolsBox from './_components/ToolsBox'
import LatestActivitiesBox from './_components/LatestActivitiesBox'

export default function page() {
  return (
    <div className="w-full flex flex-col items-center pt-20 xl:px-7 lg:px-5 md:px-3.5 px-2.5 gap-7">
      <StatisticsBox />
      <div className="w-full grid xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-4">
        <AllRequestsBox />
        <EntryExitStatisticsBox />
        <ToolsBox />
        <LatestActivitiesBox />
      </div>
    </div>
  )
}
