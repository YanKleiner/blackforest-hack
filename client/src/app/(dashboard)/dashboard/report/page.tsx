// // import { AppSidebar } from '@/app/(dashboard)/dashboard/_components/app-sidebar';
// // import { SiteHeader } from '@/app/(dashboard)/dashboard/_components/site-header';
// // import {
// //   SidebarHeader,
// //   SidebarInset,
// //   SidebarProvider,
// // } from '@/components/ui/sidebar';

// // import data from './data.json';

// // export default function DashboardPage() {
// //   return (
// //     <>
// //       <SiteHeader name='Dashboard' />
// //       <div className='flex flex-1 flex-col'>
// //         <div className='@container/main flex flex-1 flex-col gap-2'>
// //           <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
// //             <SectionCards />
// //             <div className='px-4 lg:px-6'>
// //               <ChartAreaInteractive />
// //             </div>
// //             <DataTable data={data} />
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// import { AppSidebar } from '@/app/(dashboard)/dashboard/_components/app-sidebar';
// import { ChartAreaInteractive } from '@/app/(dashboard)/dashboard/_components/chart-area-interactive';
// import { DataTable } from '@/app/(dashboard)/dashboard/_components/data-table';
// import { SectionCards } from '@/app/(dashboard)/dashboard/_components/section-cards';
// import { SiteHeader } from '@/app/(dashboard)/dashboard/_components/site-header';
// import {
//   SidebarHeader,
//   SidebarInset,
//   SidebarProvider,
// } from '@/components/ui/sidebar';

// export default function DashboardPage() {
//   return (
//     <>
//       <SiteHeader name='Dashboard' />
//       <div className='flex flex-1 flex-col'>
//         <div className='@container/main flex flex-1 flex-col gap-2'>
//           <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
//             <SectionCards />
//             <div className='px-4 lg:px-6'>
//               <ChartAreaInteractive />
//             </div>
//             <DataTable data={data} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import ChatWindow from '@/app/(dashboard)/dashboard/_components/chat-window';

import { useStore } from '@/lib/store';

import { SectionCards } from '@/app/(dashboard)/dashboard/_components/section-cards';
import { DataTable } from '@/app/(dashboard)/dashboard/_components/data-table';
import { ChartAreaInteractive } from '@/app/(dashboard)/dashboard/_components/chart-area-interactive';

export default function Chat() {
  const [isLoading, setIsLoading] = useState(true);
  const { setGraphData } = useStore();

  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem('startData');

    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setGraphData(parsedData);
      } catch (error) {
        console.error('Error parsing stored data:', error);
      }
    }

    setIsLoading(false);
  }, []);

  // Get the graphData from the store to pass to Graph and ChatWindow
  const { graphData } = useStore();

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-lg font-medium'>Loading...</div>
      </div>
    );
  }

  return (
    <div className='relative flex flex-1 flex-col top-20'>
      <div className='@container/main flex flex-1 flex-col gap-2'>
        <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
          <SectionCards />
          <div className='px-4 lg:px-6'>
            <ChartAreaInteractive />
          </div>
        </div>
      </div>
    </div>
  );
}
