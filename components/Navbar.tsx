"use client"
import React from 'react'
import Link from 'next/link'
import { Moon, Sidebar } from 'lucide-react'
import Dropdown from './custom/ProfileDropdown'
import DarkModeToggle from './custom/DarkModeToggle'
import { SidebarTrigger } from './ui/sidebar'


const Navbar = () => {
  return (
    <nav className='p-4 flex items-center justify-between'>
      <SidebarTrigger />
      <div className='flex items-center gap-4'>
        <Link href="/" >Dashboard</Link>
        <DarkModeToggle/>
        <Dropdown />
      </div>
    </nav>
  )
}

export default Navbar
