![Kustomer](./docs/images/logo.png){:height="72px" width="72px"}.

# Happeo Kustomer Custom App

## About The Project

Kustomer Custom app is a Happeo Pages integration. It enables Kustomer Chatbot widget in the Happeo Pages.

### Built With

- [Kustomer Chat SDK](https://kustomer.kustomer.help/en_us/chat-sdk-SyRjnij0P)
- [Happeo](https://app.happeo.com/)
- [Happeo WidgetSDK](https://www.npmjs.com/package/@happeo/widget-sdk)

## Getting Started

### Prerequisites

Happeo Admin access rights

Tools

- npm
  ```
  npm install npm@latest -g
  ```
- node version >14
  ```
  node -v
  ```

### Installation

#### Prerequisite

You have created a Custom app in Happeo admin and slug is copied to clipboard.
You have created API key in Kustomer site [Install Kustomer Chat](https://kustomer.kustomer.help/en_us/chat-sdk-SyRjnij0P)

#### In development mode

1. Clone the repo
2. Replace slug in index.js with the clipboard version
3. Install NPM packages
   ```
   npm install
   ```
4. Start widget
   ```
   npm run start
   ```
5. Open Happeo
6. Goto pages and edit or create page
7. Add Kustomer widget
8. Fill API key and Brand Id from Kustomer site. See Prerequisite.

#### In testing or Published mode

1. Clone the repo
2. Replace slug in index.js with the clipboard version
3. Install NPM packages
   ```
   npm install
   ```
4. Build widget
   ```
   npm run build
   ```
5. Open Happeo admin and upload bundle to your app.

#### Cypress testing

Start widget in development mock mode

```
 npm run dev
```

Interactive browser

```
npm run cypress:open
```

Command line

```
npm run cypress:run
```

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
