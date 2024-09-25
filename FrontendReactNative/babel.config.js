module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv', {
      "moduleName": "@env",        // Make sure you're importing from "@env"
      "FrontendReactNative/.env": ".env", // Path to the .env file
      "blocklist": null,
      "allowlist": null,
      "safe": false,
      "allowUndefined": true
    }]
  ]
};
