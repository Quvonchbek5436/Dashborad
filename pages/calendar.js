import React from 'react'
import {Box, Typography} from "@mui/material";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pt-br";

moment.locale("en-US");
const localizer = momentLocalizer(moment);

var defaultMessages = {
    date: "Date",
    time: "Time",
    event: "Event",
    allDay: "AllDay",
    week: "Week",
    work_week: "Workweek",
    day: "Day",
    month: "Month",
    previous: "Previous",
    next: "Next",
    yesterday: "Yesterday",
    tomorrow: "Tomorrow",
    today: "Today",
    agenda: "Agenda",
    noEventsInRange: "No EventsInRange",
    showMore: function showMore(total) {
        return "+" + total + " mais";
    }
};

const myEventsList = [
    {
        title: "Test",
        start: new Date(2020, 5, 17, 13, 0, 0, 0),
        end: new Date(2020, 5, 17, 13, 30, 0, 0),
        desc: "Event Test"
    }
];
function BigCalendar() {

  return (
      <Box sx={{padding:' 16px'}}>
          <Box sx={{padding: '0 15px 15px'}}>
              <Typography sx={{fontSize:'18px',color:'#777E89'}}>App</Typography>
              <Typography sx={{fontSize: '30px', fontWeight: 'bold'}} component="h1">Calendar</Typography>
          </Box>
          <Box sx={{padding:'15px',
              boxShadow: '0px 7px 30px 0px rgb(90 114 123 / 11%)',
              maxWidth: '1920px',
              borderRadius: '20px',
              display: "flex",
              overflow:'hidden',
              backgroundColor:'white'}}>

              <Calendar
                  messages={defaultMessages}
                  formats={{
                      agendaDateFormat: "DD/MM ddd",
                      weekdayFormat: "dddd"
                  }}
                  localizer={localizer}
                  events={myEventsList}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500, fontFamily: 'Monserrat',width:'100%' }}
              />
          </Box>
      </Box>
  )
}

export default BigCalendar