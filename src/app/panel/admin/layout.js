import AdminNavBar from '@/components/layouts/AdminNavBar'
import AdminSideBar from '@/components/layouts/AdminSideBar'
import React from 'react'

export default function layout({ children }) {
    return (
        <div className="w-full bg-white flex items-start">
            <AdminSideBar />
            <div className="flex-1 w-full flex flex-col relative">
                <AdminNavBar />
                {children}
            </div>
        </div>
    )
}
