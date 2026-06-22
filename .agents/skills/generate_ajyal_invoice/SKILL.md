---
name: generate_ajyal_invoice
description: Instructions on calculating the final client invoice for Modern Tire House renewals based on GoDaddy hard costs.
---

# Generate Ajyal Invoice

Use this skill when preparing the annual renewal invoice for Modern Tire House (Oman - House Of Tyres) on behalf of Ajyal.

## 1. Prerequisites
You must have the exact verified GoDaddy hard costs for the upcoming renewal period. Use the `verify_godaddy_renewals` skill if you do not have these numbers.

## 2. Calculation Rules
Follow the Managed Services pricing model:
1. **Never charge "website building" fees**. The initial build was paid off in 2024.
2. **Apply Markup**: Add a 50% agency markup to the verified GoDaddy base costs for the Domain, Web Hosting, and Professional Emails.
3. **Add SSL Labor Fee**: Add a flat ₹3,500 fee for "SSL Security & Maintenance". (This justifies the manual labor of renewing the free PunchSalad SSL certificate every 90 days).
4. **Add Management Fee**: Add a flat ₹2,000 "Agency Management Fee".
5. **Calculate GST**: Sum the marked-up costs and flat fees to get the Subtotal. Calculate 18% GST on the Subtotal.

## 3. Output Format
Present the calculated numbers to the user in a clear table, explicitly showing the Verified GoDaddy Cost side-by-side with the Proposed Client Price. 

Also provide a ready-to-send draft email outlining the upcoming services (Domain, Hosting, Emails, SSL Security, Agency Management) and the Grand Total (inclusive of GST).
