const { default: Asana } = require("@/public/icons/asana");
const { default: Jira } = require("@/public/icons/jira");
const { default: Zendesk } = require("@/public/icons/zendesk");

const Details2 = [{
    id:"Jira",
    title:"Jira",
    subtitle:"For agile project management and issue tracking.",
    svg:<Jira/>
},
{
    id:"Asana",
    title:"Asana",
    subtitle:"For project management and task tracking.",
    svg:<Asana/>
},
{
    id:"Zendesk",
    title:"Zendesk",
    subtitle:"For customer support and ticket management.",
    svg:<Zendesk/>
}]

export default Details2