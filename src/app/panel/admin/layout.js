"use client";

import AdminNavBar from '@/components/layouts/AdminNavBar'
import AdminSideBar from '@/components/layouts/AdminSideBar'
import React, { useState } from 'react'

export default function Layout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="w-full bg-white flex items-start relative md:static">
            <AdminSideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <div className="flex-1 flex flex-col relative overflow-x-hidden">
                <AdminNavBar setIsOpen={setIsSidebarOpen} />
                {children}
            </div>
        </div>
    )
}