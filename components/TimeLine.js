import * as React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Box } from "@mui/material";

const times = [
  {
    time: "09.50",
    color: "primary",
    action: "Payment received from John Doe of $385.90",
  },
  { time: "09.46", color: "secondary", action: "Project Meeting" },
  { time: "09.47", color: "warning", action: "New sale recorded #ML-3467" },
  {
    time: "09.48",
    color: "danger",
    action: "Payment was made of $64.95 to Michael Anderson",
  },
  {
    time: "09.49",
    color: "success",
    action: "New payment receipt created for Alphanso Golvo",
  },
];

export default function TimeLine() {
  return (
    <Box width="100%" marginLeft="0px">
      {times.map((item, index) => (
        <Timeline
          key={index}
          position="alternate"
          color="text.dark"
          sx={{
            "&.MuiTimeline-root": {
              margin: "0px",
              padding: "0px",
              width: "100%",
              justifyContent: "start",
              flexGrow: 100,
            },
          }}
        >
          <TimelineItem sx={{ marrginBottom: "0" }}>
            <TimelineOppositeContent
              color="text.dark"
              sx={{ fontSize: "14px", fontWeight: "700" }}
            >
              {item.time}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color={item.color} />
              <TimelineConnector
                sx={{
                  "&.MuiTimelineConnector-root ": {
                    height: "22px !important",
                    width: "2px !important",
                  },
                }}
              />
            </TimelineSeparator>
            <TimelineContent
              color="text.secondary"
              sx={{ fontSize: "14px", fontWeight: "500" }}
            >
              {item.action}
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      ))}
    </Box>
  );
}
