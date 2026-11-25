---
title: "Logistics dashboards that people actually use"
description: "Many dashboards are opened twice and then forgotten. A few design choices make the difference between a report people check every morning and one they ignore."
date: 2026-11-25
topic: data
image: data
takeaways:
  - "Design each dashboard page for one audience and one decision."
  - "Lead with a few KPIs that have targets and trends, and let users click through to the orders behind them."
  - "Build one shared data model, so every report shows the same totals."
figure: dash
figureBefore: 3
bottomLine: "A useful dashboard answers one person’s question in seconds and lets them check the detail behind every number. Start small, build on one trusted data model, and add alerts when the team is ready to act on them."
faq:
  - q: "Power BI or Tableau?"
    a: "Both are strong. The better choice is usually the one your company already licenses and supports. The data model and the design matter far more than the tool."
  - q: "How many charts should a dashboard page have?"
    a: "As few as answer the question, often four to six. If a page needs more, it probably serves more than one audience and should be split."
  - q: "What is a control tower?"
    a: "A shared view of orders, shipments and stock with alerts, used by a team to fix problems as they happen. Many control towers start as a well-built dashboard with automatic refresh and a few exception alerts."
terms:
  - "kpi"
  - "star-schema"
  - "control-tower"
  - "single-source-of-truth"
---

Building a dashboard has never been easier. Power BI, Tableau and Looker Studio connect to almost any data source in minutes. Yet many logistics dashboards are abandoned within weeks: too many charts, numbers nobody trusts, and no clear answer to the question the user had when they opened the page.

## Start from the decision, not the data

Before choosing a single chart, write down who will use the dashboard, how often, and which decision it should support. A dispatcher checking today's deliveries at eight in the morning needs a different page from a logistics director reviewing the month. One page, one audience, one main question.

## Five rules for a dashboard that gets used

1. **Lead with three to five KPIs** at the top of the page, each with its target and its trend.
2. **Make every number traceable to the order.** Trust grows when a planner can open the shipments behind a red figure.
3. **Show exceptions, not everything.** Late orders, unusual costs and failures by reason are more useful than a complete list.
4. **Use one data model.** Build the tables for shipments, orders, customers, carriers and dates once, in a star schema, and point every report at it, so two pages never show different totals.
5. **Refresh automatically and say when.** A "last updated" time on the page answers the first question every user asks.

## Choosing the right chart

- **Trends over time:** line charts.
- **Comparing customers, lanes or carriers:** bar charts, sorted from largest to smallest.
- **Steps of a process,** such as orders created, picked, shipped and delivered: a funnel or a row of bars.
- **Locations:** a map only when the place itself matters; otherwise a ranked bar chart is easier to read.

Leave out 3D effects, large gauges that show a single number, and colour used as decoration. Colour should carry meaning, for example red for late and grey for everything that needs no attention.

## From dashboard to control tower

When a dashboard refreshes often enough and sends an alert when something goes wrong, it becomes a control tower: one view in which a team spots a late shipment or a stock-out risk and acts before the customer notices. It does not need special software to start. Most control towers begin as a well-built dashboard with a few alerts, and grow as the team learns which exceptions matter.
