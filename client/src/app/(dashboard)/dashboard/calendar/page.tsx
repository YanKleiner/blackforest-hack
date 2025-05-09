import { SiteHeader } from '@/app/(dashboard)/dashboard/_components/site-header';

import { SchedulerProvider } from '@/app/(dashboard)/dashboard/calendar/_providers/schedular-provider';
import SchedularView from '@/app/(dashboard)/dashboard/calendar/_components/view/schedular-view';

export default function CalendarPage() {
  return (
    <>
      <SiteHeader name={'Calendar'} />
      <SchedulerProvider weekStartsOn='monday'>
        <SchedularView />
      </SchedulerProvider>
    </>
  );
}
