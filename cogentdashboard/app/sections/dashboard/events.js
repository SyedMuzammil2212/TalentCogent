"use client";
import Eventscard from "@/app/components/eventscard";
import Eventsnavbar from "@/app/components/eventsnavbar";
import Holidaycard from "@/app/components/holidaycard";
import Meetingscard from "@/app/components/meetingscard";
import p1 from "@/public/images/p1.png";
import p2 from "@/public/images/p2.png";
import p3 from "@/public/images/p3.png";
import p4 from "@/public/images/p4.png";
import p5 from "@/public/images/p5.png";

import React, { act, useState } from "react";

const Events = () => {
  const [activeTab, setActiveTab] = useState(3);
  const holidayData = [
    {
      name: "Christmas Holiday",
      start: "DEC 25",
      end: "DEC 27",
      title: "Happy Christmas!",
      emoji: "🎄",
      type: "Religious",
      days: 2,
    },
    {
      name: "Women's Day",
      start: "MAR 8",
      end: "MAR 8",
      title: "Happy Women’s Day!",
      emoji: "🌸",
      type: "International",
      days: 1,
    },
    {
      name: "Worker's Day",
      start: "MAY 1",
      end: "MAY 1",
      title: "Happy Workers’ Day!",
      emoji: "🧑‍💻",
      type: "International",
      days: 1,
    },
    {
      name: "Christmas Holiday",
      start: "DEC 25",
      end: "DEC 27",
      title: "Happy Christmas!",
      emoji: "🎄",
      type: "Religious",
      days: 2,
    },
    {
      name: "Women's Day",
      start: "MAR 8",
      end: "MAR 8",
      title: "Happy Women’s Day!",
      emoji: "🌸",
      type: "International",
      days: 1,
    },
    {
      name: "Worker's Day",
      start: "MAY 1",
      end: "MAY 1",
      title: "Happy Workers’ Day!",
      emoji: "🧑‍💻",
      type: "International",
      days: 1,
    },
  ];
  const eventsData = [
    {
      name: "Tesla 4th year Celebration Party",
      timings: "7:00 - 11:00 PM (UTC)",
      location: "341 Windy Ridge Road, LA",
      organizer: "Sofia Williams",
      total: 25,
      attended: 16,
    },
    {
      name: "Designing Camp for AlignUI",
      timings: "9:00 AM - 10:00 PM (UTC)",
      location: "928 Bagwell Avenue, FL",
      organizer: "Matthew Jhonson",
      total: 25,
      attended: 12,
    },
    {
      name: "AlignUI Launch Party",
      timings: "8:00 - 12:00 PM (UTC)",
      location: "148 Harley Brook Lane, VA",
      organizer: "Emma Wright",
      total: 25,
      attended: 18,
    },
    {
      name: "Tesla 4th year Celebration Party",
      timings: "7:00 - 11:00 PM (UTC)",
      location: "341 Windy Ridge Road, LA",
      organizer: "Sofia Williams",
      total: 25,
      attended: 16,
    },
    {
      name: "Designing Camp for AlignUI",
      timings: "9:00 AM - 10:00 PM (UTC)",
      location: "928 Bagwell Avenue, FL",
      organizer: "Matthew Jhonson",
      total: 25,
      attended: 12,
    },
    {
      name: "AlignUI Launch Party",
      timings: "8:00 - 12:00 PM (UTC)",
      location: "148 Harley Brook Lane, VA",
      organizer: "Emma Wright",
      total: 25,
      attended: 18,
    },
  ];

  const meetings = [
    {
      with: "James Brown",
      timings: "8:00 - 12:00 PM (UTC)",
      platform: "Google Meet",
      type: "Marketing",
      members: [p1, p2, p3, p4, p5],
    },
    {
      with: "Laura Perez",
      timings: "8:00 - 12:00 PM (UTC)",
      platform: "Zoom",
      type: "Product Manager",
      members: [p1, p2, p3, p4, p5],
    },
    {
      with: "Arthur Taylor",
      timings: "8:00 - 12:00 PM (UTC)",
      platform: "Slack",
      type: "Partnership",
      members: [p1, p2, p3, p4, p5],
    },
    {
      with: "James Brown",
      timings: "8:00 - 12:00 PM (UTC)",
      platform: "Google Meet",
      type: "Marketing",
      members: [p1, p2, p3, p4, p5],
    },
    {
      with: "Laura Perez",
      timings: "8:00 - 12:00 PM (UTC)",
      platform: "Zoom",
      type: "Product Manager",
      members: [p1, p2, p3, p4, p5],
    },
    {
      with: "Arthur Taylor",
      timings: "8:00 - 12:00 PM (UTC)",
      platform: "Slack",
      type: "Partnership",
      members: [p1, p2, p3, p4, p5],
    },
  ];
  return (
    <div className=" w-full border-[#EFEFEF] border-[1px] rounded-3xl overflow-hidden  ">
      <Eventsnavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className=" flex flex-col w-full gap-3 p-3 h-[580px] overflow-hidden overflow-y-scroll pb-3 ">
        {activeTab == 3 &&
          holidayData.map((item, index) => (
            <Holidaycard
              name={item.name}
              type={item.type}
              start={item.start}
              end={item.end}
              emoji={item.emoji}
              days={item.days}
              message={item.title}
              index={index}
            />
          ))}
        {activeTab == 2 &&
          eventsData.map((item, index) => (
            <Eventscard
              name={item.name}
              organizer={item.organizer}
              attend={item.attended}
              total={item.total}
              location={item.location}
              timings={item.timings}
              index={index}
            />
          ))}
        {activeTab == 1 &&
          meetings.map((item, index) => (
            <Meetingscard
              with1={item.with}
              timings={item.timings}
              platform={item.platform}
              type={item.type}
              members={item.members}
              index={index}
            />
          ))}
      </div>
    </div>
  );
};

export default Events;
