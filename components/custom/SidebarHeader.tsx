import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import Image from 'next/image'
import { SidebarMenuButton } from '../ui/sidebar'

const SidebarHeaderDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton asChild>
          <Link href="/">
            <Image src="/DevDotCed-Emblem-enhanced-tp.png" alt='logo' width={20} height={20}/>
            <span>DevDotCed</span>
          </Link>
        </SidebarMenuButton>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}

export default SidebarHeaderDropdown
