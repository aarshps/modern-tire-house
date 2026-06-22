# Modern Tire House - Agent Instructions

This repository manages the Modern Tire House static website and its billing/hosting infrastructure.

## Context for Agents
- **Client**: Modern Tire House (formerly Oman - House Of Tyres)
- **Agency**: Ajyal (formerly Make My Sales)
- **Hosting/Registrar**: GoDaddy
- **SSL Provider**: PunchSalad (Free) but billed to client as premium managed security.

## Billing Strategy & Invoicing
Future agents working on renewals must strictly adhere to the Managed Services pricing model established in 2026.
1. **Never charge "website building" fees** again (the initial build was paid off in 2024 at ₹36,000).
2. **Verify Hard Costs**: GoDaddy promotional rates expire after year one. Always verify actual incoming costs on the GoDaddy dashboard before invoicing.
3. **Markup Rules**: Apply a standard 50% agency markup on actual GoDaddy hard costs, add a ₹3,500 labor fee for SSL management (PunchSalad), and a ₹2,000 flat Agency Management fee.
4. **2026 Verified Pricing Example**:
   - Total GoDaddy Cost: ~₹9,005
   - Total Client Invoice: ₹20,296
   - Net Profit: ~₹11,290

## Skills Available
- `verify_godaddy_renewals`: Guide on extracting exact costs from GoDaddy.
- `generate_ajyal_invoice`: Instructions on calculating the final client invoice.

*Note: All extensive human-readable documentation resides in the `wiki` master branch.*
