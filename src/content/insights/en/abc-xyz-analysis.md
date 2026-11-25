---
title: "ABC-XYZ analysis: give every item the policy it deserves"
description: "Treating every item the same wastes stock on some and causes shortages on others. ABC-XYZ analysis groups items by value and by how steady their demand is, so each group gets the right policy."
date: 2026-11-25
topic: inventory
image: picking
takeaways:
  - "ABC ranks items by value; XYZ groups them by how steady their demand is."
  - "The nine combined groups each deserve their own stock policy, service level and amount of planner attention."
  - "Use a year of demand data, choose cut-offs that fit your range, and refresh the analysis every quarter."
figure: abc
figureBefore: 4
bottomLine: "ABC-XYZ analysis needs a spreadsheet and a year of data, and it tells you where to hold stock, where to order on demand and where your planners should spend their time."
faq:
  - q: "Should ABC be based on sales value or on volume?"
    a: "Usually on value, such as annual sales or consumption value, because that reflects the money tied up and at risk. For warehouse layout, a ranking by number of picks is more useful."
  - q: "What if an item is new and has no history?"
    a: "Give it a provisional class based on similar items, and recalculate once it has three to six months of demand."
  - q: "Can ABC-XYZ replace demand forecasting?"
    a: "No. It tells you which method and policy suit each group: for example, statistical forecasting for X items and order-driven planning for many Z items."
terms:
  - "abc-analysis"
  - "xyz-analysis"
  - "safety-stock"
  - "cycle-service-level"
---

A typical warehouse holds thousands of items. A few of them carry most of the sales; many sell rarely and unpredictably. Yet the same reorder rules, the same safety stock logic and the same planner attention are often applied to all of them. ABC-XYZ analysis is a simple way to split items into groups that deserve different treatment.

## ABC: sorting by value

ABC analysis ranks items by their share of a value measure, usually annual sales value or consumption value, and cuts the ranked list into three classes:

- **A items:** the top items that together make up about 80% of the value. Often only 10 to 20% of all items.
- **B items:** the next 15% of the value.
- **C items:** the long tail that makes up the last 5% of the value, often half of all items or more.

The 80/15/5 split is a convention, not a law. Choose cut-offs that suit your range.

## XYZ: sorting by demand stability

XYZ analysis groups items by how steady their demand is. The usual measure is the coefficient of variation of weekly or monthly demand over the last year.

<p class="formula">Coefficient of variation = standard deviation of demand ÷ average demand<small>Common cut-offs: X below 0.5, Y from 0.5 to 1, Z above 1. Adjust them to your own data.</small></p>

- **X items:** steady demand that is easy to forecast.
- **Y items:** demand that varies, often with seasons or trends.
- **Z items:** irregular demand with many weeks of no sales, hard to forecast.

## Nine groups, nine policies

Crossing the two gives a three-by-three matrix, and each cell suggests a policy:

- **AX:** high value and steady demand. Keep stock lean, with automatic reorders and tight control.
- **AY and AZ:** high value but variable. Hold safety stock and review closely, or make and buy to order where lead times allow.
- **CX:** low value and steady. Simple min–max rules and little planner time.
- **CZ:** low value and irregular. Candidates for ordering on demand, or for removal from the range.

## How to run the analysis

1. Take twelve months of demand by item and by week or month, with the unit cost or price.
2. Calculate each item's annual value, rank the items and assign A, B or C.
3. Calculate the coefficient of variation and assign X, Y or Z.
4. Agree a policy for each cell with planning, sales and finance, and set service levels and review frequencies to match.
5. Repeat every quarter: items move between classes as products age and customers change.

Use demand, meaning what customers ordered, rather than shipments where you can. Shipments hide the sales you lost while an item was out of stock.
