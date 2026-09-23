# 9 Square Dealer File Tracker — Frontend

This is the frontend-only first version.

## Included
- Dashboard
- Dealer search and dealer detail
- File search and file detail
- Give File screen with date
- Duplicate protection
- Admin panel
- Add/deactivate dealers
- Add/deactivate files
- Responsive laptop/mobile layout
- Your uploaded Excel is used as starting sample data

## Important
The current Excel was read as:
- 39 files
- 27 dealers
- 175 existing Y/received records

The workbook does not contain dates for those existing Y records, so those records show "Date not recorded".

For this frontend demo, changes are stored in browser localStorage. They are NOT shared between devices.

## Run
Simplest:
1. Open `index.html` in Chrome/Edge.

Recommended if you have VS Code:
1. Open this folder in VS Code.
2. Install/use Live Server.
3. Right-click `index.html` → Open with Live Server.

Next stage:
- Connect this UI to Supabase.
- Import the Excel records into a shared database.
- Add real admin authentication.
- Make dealer/file changes shared across laptop and mobile.
