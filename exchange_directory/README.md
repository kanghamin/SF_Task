# Exchange Directory

This application shows a list of centralized exchanges using CoinGecko's API. When a user clicks on an exchange on the main page, they can see the exchange's introduction and social media links.

## Development

### Install Dependencies

```bash
npm install
```

### Run

```bash
npm start
```

## Components Directory
```
src
│   App.jsx: Manages the main page and exchange detail router
│   index.jsx
│   index.css   
│
└───components
│   │
│   │
│   └───exchangeDetails
│   │   |
│   │   │   ExchangeDetails.jsx: Contains detailed information of the exchange
│   │   │   
│   │   └───exchangeInfo  
│   │       |
│   │       │   ExchangeInfo.jsx: Used to prevent overlapping containers and contains information on each exchange
│   │       │
│   │       └───exchangeLink
│   │           │
│   │           │   ExchangeLink.jsx: Used to prevent duplicate containers and contains information on social media links of the exchange
│   │           │
│   └───home
│   │   │
│   │   │   Home.jsx: Shows a list of exchanges, showing 10 exchanges per page. Clicking the Next button shows the next 10 exchanges
│   │   │   
│   │   └───table
│   │       │   
│   │       │   Table.jsx: Used to prevent duplicate codes and creates a table with brief information of each exchange
│   │       │ 
│   │  
│   │  
│   └───share
│   │
│   │    Title.jsx: Manage each page's title
│   │
```
