'use client';

import * as React from 'react';
import {
  IconCalendar,
  IconCamera,
  IconDashboard,
  IconFileAi,
  IconFileDescription,
  IconHelp,
  IconMessage,
  IconSearch,
  IconSettings,
} from '@tabler/icons-react';

import { LayoutDashboardIcon, ArrowUpCircleIcon } from 'lucide-react';

import { NavMain } from '@/app/(dashboard)/dashboard/_components/nav-main';
import { NavSecondary } from '@/app/(dashboard)/dashboard/_components/nav-secondary';
import { NavUser } from '@/app/(dashboard)/dashboard/_components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Logo from '@/components/custom/logo';

const data = {
  user: {
    name: 'Hotel Owner',
    email: 'hotel@owner.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Search',
      url: '/dashboard/search',
      icon: IconSearch,
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutDashboardIcon,
    },

    {
      title: 'Chat',
      url: '/dashboard/chat',
      icon: IconMessage,
    },
    {
      title: 'Calendar',
      url: '/dashboard/calendar',
      icon: IconCalendar,
    },
    {
      title: 'Bookings',
      url: '/dashboard/bookings',
      icon: IconFileDescription,
    },
  ],
  navClouds: [
    {
      title: 'Capture',
      icon: IconCamera,
      isActive: true,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Proposal',
      icon: IconFileDescription,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Prompts',
      icon: IconFileAi,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Settings',
      url: '#',
      icon: IconSettings,
    },
    {
      title: 'Get Help',
      url: '#',
      icon: IconHelp,
    },
    // {
    //   title: 'Search',
    //   url: '#',
    //   icon: IconSearch,
    // },
  ],
  // documents: [
  //   {
  //     name: 'Data Library',
  //     url: '#',
  //     icon: IconDatabase,
  //   },
  //   {
  //     name: 'Reports',
  //     url: '#',
  //     icon: IconReport,
  //   },
  //   {
  //     name: 'Word Assistant',
  //     url: '#',
  //     icon: IconFileWord,
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // TODO dynamically create routes based on client / coach

  return (
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className='data-[slot=sidebar-menu-button]:!p-1.5'>
              <a href='#'>
                <ArrowUpCircleIcon className='!size-5' />
                <span className='text-base font-semibold'>Your Hotel</span>
              </a>
              {/* <Logo /> */}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} /> */}
        <NavSecondary items={data.navSecondary} className='mt-auto' />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
