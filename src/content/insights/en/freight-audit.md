---
title: 'Freight invoices: the cheapest data project you are not doing'
description: 'Checking freight invoices against contracted rates recovers overcharges and builds the lane-level data you need for your next tender.'
date: 2026-11-23
---

Freight is one of the largest costs in most distribution businesses, yet invoices are often approved with a quick glance at the total. Carriers are not usually dishonest. But rate cards are complex, fuel surcharges change every month, and accessorial charges for waiting time, tail lifts or failed deliveries are easy to apply by mistake. Small errors on thousands of shipments add up.

## What usually goes wrong

- **Wrong base rate:** an old rate card, the wrong zone or the wrong weight band
- **Fuel surcharge errors:** the wrong index month or percentage applied
- **Accessorials:** charges for services that were not requested or not delivered
- **Weight and volume:** billed weight higher than shipped weight, or volumetric weight applied incorrectly
- **Duplicates:** the same shipment invoiced twice, often after a correction

## How to set up a simple audit

1. **Get invoices into a table.** Most carriers can send electronic invoice files. If not, the PDFs can be extracted. Each line needs date, origin, destination, weight, service and charges.
2. **Encode the contract.** Turn the rate cards, fuel rules and agreed accessorials into a lookup table. This step alone often surfaces terms nobody remembered agreeing.
3. **Calculate the expected charge.** For every shipment, compute what the contract says it should cost.
4. **Flag the variances.** Sort by size, review the largest first and send claims to carriers with the evidence attached.
5. **Automate the check.** Once the logic works, run it on every new invoice batch before payment.

## The second benefit

The audit gives you something more valuable than recovered overcharges: a clean, lane-by-lane history of volumes, weights and real costs. That dataset is exactly what you need to run a freight tender, compare carriers fairly and model network changes. Without it, tenders are negotiated on estimates.

Start with one carrier and three months of invoices. It is a small, contained project, it usually pays for itself, and it creates the foundation for every logistics decision that follows.
