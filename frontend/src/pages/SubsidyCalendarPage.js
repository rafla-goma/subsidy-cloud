import React, { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import ja from 'date-fns/locale/ja';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'ja': ja,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const SubsidyCalendarPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // ここで補助金データを取得するAPIを呼び出す
    const mockEvents = [
      {
        title: 'IT革新補助金 締切',
        start: new Date(2023, 5, 15),
        end: new Date(2023, 5, 15),
        allDay: true,
      },
      {
        title: '環境技術支援金 開始',
        start: new Date(2023, 6, 1),
        end: new Date(2023, 6, 1),
        allDay: true,
      },
      {
        title: '中小企業成長支援金 締切',
        start: new Date(2023, 7, 31),
        end: new Date(2023, 7, 31),
        allDay: true,
      },
    ];
    setEvents(mockEvents);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">補助金カレンダー</h1>
      <div className="bg-white p-4 rounded-lg shadow-md" style={{ height: '500px' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%' }}
        />
      </div>
    </div>
  );
};

export default SubsidyCalendarPage;