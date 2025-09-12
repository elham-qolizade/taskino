import React from 'react'
import ProjectsBar from './_components/ProjectsBar'
import TasksTable from './_components/TasksTable'

export default function page() {
  return (
    <div className="w-full flex flex-col items-center pt-20 px-7 gap-7">
      <ProjectsBar />
      <TasksTable />
    </div>
  )
}
