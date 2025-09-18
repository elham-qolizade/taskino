import React from 'react'
import ProjectsBar from './_components/ProjectsBar'
import TasksTable from './_components/TasksTable'

export default function page() {
  return (
    <div className="w-full flex flex-col items-center pt-20 xl:px-7 lg:px-5 md:px-3.5 px-2.5 gap-7">
      <ProjectsBar />
      <TasksTable />
    </div>
  )
}
