---
title: "Where to put a warehouse: centre of gravity and beyond"
description: "The centre of gravity method gives a quick, data-based starting point for a warehouse location. A good decision then adds real costs, delivery times and the sites that are actually available."
date: 2026-11-25
topic: strategy
image: forklift
takeaways:
  - "The centre of gravity method finds a starting location from customer locations weighted by volume."
  - "It ignores real roads, rates, delivery times and available sites, so treat it as a first step."
  - "Compare a short list of real sites on total cost and delivery service, and test scenarios before deciding."
figure: network
figureBefore: 3
bottomLine: "Use the centre of gravity to see where your demand really sits, then let a comparison of real candidate sites on total cost and service make the decision."
faq:
  - q: "How much data do we need for a location study?"
    a: "A year of shipments with destination, weight or pallets and date, plus transport rates and the costs of the candidate sites. Most of it already sits in the ERP and in freight invoices."
  - q: "One warehouse or several?"
    a: "More warehouses shorten delivery distances but add stock, rent and management. A network model shows where total cost is lowest for the service level you need."
  - q: "How long does a warehouse location study take?"
    a: "A focused study of a few candidate sites usually takes a few weeks, depending on how quickly the shipment and cost data can be collected."
terms:
  - "centre-of-gravity"
  - "ftl-ltl"
  - "tonne-km"
  - "cross-docking"
---

Few supply chain decisions last as long as where a warehouse goes. A location chosen today shapes transport costs, delivery times and the labour market you hire from for ten years or more. Yet many sites are chosen because land was available, or because the old warehouse was nearby. A simple model shows whether that choice is close to the best one.

## The centre of gravity method

The centre of gravity method finds the point that minimises the distance to your customers, weighted by how much each one receives. In its simplest form it is a weighted average of their coordinates.

<p class="formula">X = Σ(volume × x) ÷ Σ volume   and   Y = Σ(volume × y) ÷ Σ volume<small>x and y are the coordinates of each customer or delivery zone; the volume is what each receives in a year, for example in tonnes or pallets.</small></p>

If inbound transport is a large part of the cost, include the suppliers too, weighted by inbound volumes.

## What the centre of gravity leaves out

The result is a starting point, not an answer:

- It uses straight-line distance, while trucks follow roads and ferries follow timetables.
- It treats every tonne-kilometre the same, but rates differ by lane and mode. Inbound full truckloads cost far less per tonne than outbound part loads and parcels.
- It ignores service. The lowest-cost point may miss next-day delivery to key customers.
- It may land in a lake, a city centre or an area with no suitable buildings.

## From one point to a network model

A practical study compares a short list of real candidate sites, often three to six, on total cost and service:

1. Build a demand map from a year of shipments, by postcode or region.
2. Add transport rates for inbound and outbound flows, by mode and distance band.
3. Add the warehouse costs of each candidate: rent, labour and handling.
4. For each option, calculate the total cost and the share of customers reached within the target delivery time.
5. Test scenarios: growth, a new large customer, higher fuel prices, or a second warehouse.

For one or two sites a spreadsheet model is often enough. For larger networks, optimisation tools choose the best combination of sites automatically.

## Beyond cost

The availability of staff, access to motorways, rail terminals and ports, customs arrangements and free zones, and room to expand can outweigh small differences in transport cost. Put them into the comparison from the start, with weights the management team agrees on.
