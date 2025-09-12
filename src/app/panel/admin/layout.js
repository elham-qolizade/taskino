import AdminNavBar from '@/components/layouts/AdminNavBar'
import AdminSideBar from '@/components/layouts/AdminSideBar'
import React from 'react'

export default function Layout({ children }) {
    return (
        <div className="w-full bg-white flex items-start">
            <AdminSideBar />
            <div className="flex-1 flex flex-col relative overflow-x-hidden">
                <AdminNavBar />
                {children}
            </div>
        </div>
    )
}