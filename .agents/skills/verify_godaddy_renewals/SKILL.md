---
name: verify_godaddy_renewals
description: Guide to extract precise upcoming subscription renewal costs from the GoDaddy dashboard.
---

# Verify GoDaddy Renewals

When working on the Modern Tire House billing, it is critical to extract the exact upcoming renewal costs from GoDaddy, as standard renewal rates fluctuate and promotional pricing expires after year one.

Follow these steps to guide the user to verify the numbers:

1. **Ask the user to log in** to their GoDaddy account (`sso.godaddy.com`).
2. **Navigate to Renewals & Billing**: Instruct the user to click their profile name in the top right corner and select "Renewals & Billing".
3. **Extract Domain & Hosting Costs**:
   - Ask them to locate the `.COM Domain` (`moderntirehouse.com`) and provide the base price listed next to the upcoming Auto-Renew date.
   - Ask them to locate the `Web Hosting Starter` plan and provide the base price for the upcoming August renewal.
4. **Extract Email Costs**:
   - Ask them to locate the `Professional Email Pro Light` subscriptions (`sales@`, `jinesh@`, `nagandran@`).
   - Have them verify the price of one subscription and multiply by 3, or provide the total for all three.

*Fallback*: If the dashboard masks the price due to a payment method issue, instruct the user to open an Incognito window and check the current "Renewal Price" listed in the small print below the promotional prices on GoDaddy's public Web Hosting and Domain sales pages.
