const { default: Monday } = require("@/public/icons/monday");
const { default: Skype } = require("@/public/icons/skype");
const { default: Slack } = require("@/public/icons/slack");
const { default: Trello } = require("@/public/icons/trello");
const { default: Zoom } = require("@/public/icons/zoom");
const { default: Microsoft } = require("@/public/icons/microsoft");

const details = [
  {
    id: "Microsoft",
    title: "Microsoft Office 365",
    subtitle: "Seamless collaboration and document management.",
    svg: <Microsoft />,
  },
  {
    id: "Zoom",
    title: "Zoom",
    subtitle: "For conducting virtual meetings and interviews.",
    svg: <Zoom />,
  },
  {
    id: "Slack",
    title: "Slack",
    subtitle: "For team communiacation and real-time collaboration.",
    svg: <Slack />,
  },
  {
    id: "Trello",
    title: "Trello",
    subtitle: "For task management and project collaboration.",
    svg: <Trello />,
  },
  {
    id: "Monday.com",
    title: "Monday.com",
    subtitle: "For project tracking and HR management.",
    svg: <Monday />,
  },
  {
    id: "Skype",
    title: "Skype",
    subtitle: "For virtual meetings and real-time communication.",
    svg: <Skype />,
  },
];

export default details