---
title: 'Safety stock without guesswork'
description: 'Rules like "two weeks of cover" treat every item the same. A simple statistical approach sets safety stock by item, based on demand variability, lead time and the service level you want.'
date: 2026-11-23
---

Ask a planner how much safety stock an item needs and you will often hear a rule of thumb: two weeks of cover, or one month for imported goods. Rules like these are easy to explain, but they treat a steady, fast-moving item the same as an erratic one. The result is too much stock where demand is calm and stock-outs where it is not.

## The basic formula

Safety stock exists to absorb variability during the replenishment lead time. If lead time is reliable, a standard starting point is:

**Safety stock = z × σ × √L**

- **σ** is the standard deviation of demand (or, better, of forecast error) per period, for example per week
- **L** is the lead time in the same periods
- **z** is the service factor for the cycle service level you want: about 1.28 for 90%, 1.65 for 95% and 2.05 for 98%

An item with weekly demand variability of 40 units, a four-week lead time and a 95% target needs about 1.65 × 40 × 2 = 132 units of safety stock. An item with the same average sales but half the variability needs half as much.

## When lead time varies too

Suppliers are not perfectly reliable. If lead time itself varies, the formula widens:

**Safety stock = z × √(L × σd² + d² × σL²)**

where **d** is average demand per period and **σL** is the standard deviation of lead time. For imported goods with unpredictable transit times, the second term often dominates, which tells you that working on supplier reliability may free more cash than better forecasting.

## Making it practical

- **Segment first.** Group items by value and by demand variability. High-value, stable items deserve tight targets; slow, erratic items may be better made or bought to order.
- **Set service levels on purpose.** Moving from 95% to 99% raises the z factor from 1.65 to 2.33, about 40% more safety stock. Make that a business decision, not a default.
- **Test against history.** Replay the last year of demand against the proposed policy and count the stock-outs and the average inventory. This builds trust faster than any formula.
- **Review regularly.** Demand and suppliers change. A quarterly refresh keeps the numbers honest.

The formula is the easy part. The value comes from clean demand and lead-time data, and from agreeing service targets that finance and sales both accept.
