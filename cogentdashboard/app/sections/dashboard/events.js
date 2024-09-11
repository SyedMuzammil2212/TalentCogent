"use client";
import Eventsnavbar from "@/app/components/eventsnavbar";
import React, { useState } from "react";

const Events = () => {
  const [activeTab, setActiveTab] = useState(1);
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
  ];

  const meetings = [
    {
      with: "James Brown",
      timings: "8:00 - 12:00 PM (UTC)",
      platform: "Google Meet",
      type: "Marketing",
    },
    {
      with: "Laura Perez",
      timings: "8:00 - 12:00 PM (UTC)",
      platform: "Zoom",
      type: "Product Manager",
    },
    {
      with: "Arthur Taylor",
      timings: "8:00 - 12:00 PM (UTC)",
      platform: "Slack",
      type: "Partnership",
    },
  ];
  return (
    <div className=" w-full border-[#EFEFEF] border-[1px] rounded-3xl  ">
      <Eventsnavbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Events;
