'use client';

import SchedulerViewFilteration from '@/app/(dashboard)/dashboard/calendar/_components/view/schedular-view-filteration';

export default function SchedulerView() {
  return (
    <div className='flex flex-col gap-6'>
      <SchedulerViewFilteration />
    </div>
  );
}
