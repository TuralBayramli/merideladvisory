---
title: "Forecast accuracy: how to measure it and what to do with it"
description: "A single accuracy percentage hides as much as it shows. Measure the size of the errors and their direction, compare with a simple benchmark, and you will know where better forecasting pays off."
date: 2026-11-25
topic: inventory
image: analytics
takeaways:
  - "Measure both the size of forecast errors (MAPE or WAPE) and their direction (bias)."
  - "Bias can be removed; random error has to be covered with safety stock."
  - "Compare your forecast with a simple naive forecast to see whether the process adds value."
figure: forecast
figureBefore: 4
bottomLine: "Accuracy numbers only help when they lead to action. Track the size and the bias of errors together, at the lead time and by item group, and check that your forecast beats a naive one."
faq:
  - q: "What is a good forecast accuracy?"
    a: "There is no single target. It depends on the product, the level of detail and the time horizon. Compare with a naive forecast and with your own trend rather than with a figure from another industry."
  - q: "Why is MAPE misleading for slow-moving items?"
    a: "Because it divides by actual demand. When actual sales are small or zero, even tiny errors become huge percentages. Weighted measures such as WAPE avoid this."
  - q: "Should sales teams adjust the forecast?"
    a: "Their knowledge of promotions and customers is valuable, but check whether the adjustments improve accuracy. Tracking forecast value added shows which changes help and which add bias."
terms:
  - "mape"
  - "forecast-bias"
  - "safety-stock"
  - "sop"
---

Every planning team is asked how accurate its forecasts are, and most can quote a number. Fewer can say what the number means, whether it is good, or what it costs when the forecast is wrong. Forecast accuracy deserves careful measurement, because it drives safety stock, service levels and the money tied up in inventory.

## Two questions: how big, and which way

Forecast errors have a size and a direction. The size tells you how much buffer stock you need. The direction tells you whether you are steadily building stock or steadily running short.

<p class="formula">Error = forecast − actual demand<small>A positive error means the forecast was too high; a negative error means it was too low.</small></p>

## MAPE: the average size of the error

The mean absolute percentage error averages the size of the errors as a share of actual demand.

<p class="formula">MAPE = average of |forecast − actual| ÷ actual</p>

MAPE is easy to explain, but it breaks down for items with low or zero sales: a forecast of 2 against actual sales of 1 is a 100% error. For a group of items, the weighted version, WAPE, is more stable: total absolute error divided by total demand. It also gives fast-moving items the weight they deserve.

## Bias: the error you can fix

Bias is the error with its sign kept, as a share of demand.

<p class="formula">Bias = sum of (forecast − actual) ÷ sum of actual demand<small>Close to zero is good. A steady positive bias builds stock; a steady negative bias causes shortages.</small></p>

Random error can only be covered with safety stock, but bias can be removed. Common causes are sales targets entered as forecasts, promotions left uncleaned in the history, and products being phased out while the forecast carries on.

## Compare with a naive forecast

A MAPE of 25% may be excellent for a spare part and poor for a staple product. The fairest test is to compare your forecast with a naive one, such as "next month equals this month" or "the same month last year". If the forecasting process does not beat the naive forecast, the effort it takes is not paying off. This comparison is often called forecast value added.

## Using accuracy in practice

- **Measure where decisions are made:** by item and warehouse for stock, by product family for capacity.
- **Measure at the lead time.** The forecast that matters is the one made when the order had to be placed, not last week's update.
- **Report size and bias together,** by ABC-XYZ group. Expect high accuracy on X items, and do not chase it on Z items.
- **Feed the forecast error into safety stock,** rather than the variability of demand alone.
