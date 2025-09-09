import React from 'react'
import StatisticsBox from './_components/StatisticsBox'
import AllRequestsBox from './_components/AllRequestsBox'
import EntryExitStatisticsBox from './_components/EntryExitStatisticsBox'
import ToolsBox from './_components/ToolsBox'
import LatestActivitiesBox from './_components/LatestActivitiesBox'

export default function page() {
  return (
    <div className="w-full flex flex-col items-center pt-20 px-7 gap-5">
      <StatisticsBox />
      <div className="w-full grid grid-cols-2 gap-4">
        <AllRequestsBox />
        <EntryExitStatisticsBox />
        <ToolsBox />
        <LatestActivitiesBox />
      </div>
    </div>
  )
}
