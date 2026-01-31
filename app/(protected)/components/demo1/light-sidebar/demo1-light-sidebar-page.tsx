import { Fragment, useState } from 'react';
import {
  Toolbar,
  ToolbarActions,
  ToolbarHeading,
} from '@/layouts/demo1/components/toolbar';
import { addDays, format } from 'date-fns';
import { CalendarDays } from 'lucide-react';
import { DateRange } from 'react-day-picker';
 
import { Container } from '@/components/common/container';
import { Demo1LightSidebarContent } from './';

export function Demo1LightSidebarPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2025, 0, 20),
    to: addDays(new Date(2025, 0, 20), 20),
  });
  const [tempDateRange, setTempDateRange] = useState<DateRange | undefined>(
    date,
  );

  const handleDateRangeApply = () => {
    setDate(tempDateRange); // Save the temporary date range to the main state
    setIsOpen(false); // Close the popover
  };

  const handleDateRangeReset = () => {
    setTempDateRange(undefined); // Reset the temporary date range
  };

  const defaultStartDate = new Date(); // Default start date fallback

  return (
    <Fragment>
      <Container>
        <Toolbar>
          <ToolbarHeading
            title="Dashboard"
            description="Gym Software"
          />
         
        </Toolbar>
      </Container>
      <Container>
        <Demo1LightSidebarContent />
      </Container>
    </Fragment>
  );
}
