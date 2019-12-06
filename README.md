# Team7
# Health & Wellness Studio
## Academic Pressures Facing Youth Subteam



### Operating Instructions
This prototype was developed for the iPhone 8 using React Native, a framework for building mobile applications with JavaScript and leveraging Reactjs, and Expo. However, the minimum supported OS versions are Android 5+ and iOS 10+.

The .zip file of the
GitHub repository can be downloaded from our website. To run the app using Expo, you need to download or clone this repository
and run `npm install` inside the directory team7/Compass. Here are step-by-step instructions:
1. Ensure that you have the correct dependencies installed: Node.js version >=4.0, and for native iOS (install/have Xcode, it is free and most probably pre installed)
1. Install the Expo app onto your phone from the App Store.
2. Download the .zip file of the evolve repository from our website.
3. Unzip the file.
4. Open your terminal.
5. `npm install -g expo-cli`
6. Locate the directory where the file is, then cd into the directory team7/Compass/.
7. Type `npm install`.
8. Type `expo start` and scan the QR code printed in the terminal with your phone camera
(make sure that your phone is unlocked and that your phone camera is a sufficient
distance from your computer screen to pick up the QR code), then click on the banner
that pops up to open the app in Expo. Alternatively, type `expo start --send-to
YourPhoneNumber`, where YourPhoneNumber is your 10-digit phone number
(numbers only; no parentheses, dashes, etc.). If running using the phone number option,
click on the link in the text message sent to your phone to open the app in Expo.
You may also insert your email address in the `--send-to` flag, and a link will be sent to that email.
That link will open the app in Expo. The app should now be opened in Expo and display the launch screen with the “Get
Started” button.
### Troubleshooting:
If you haven’t done so already, you may need to create an Expo account
and/or log in to Expo by running expo login in the terminal. Also, make sure that your phone is
on the same Wi-Fi network as the computer you’re using, and if a red error message regarding
the bridge is displayed upon launching the app, you may need to repeatedly click “Reload” and
wait for the JSBundle to build to 100%.

If you are experiencing fatal JS error, Expo will immediately reload the application and you do not need to do anything.
### Limitations
Due to the time and resource constraints of this project, there are features that are not yet fully implemented:
* Although the login feature is functional, all profile member information, including images and timeline information, is hard-coded. The data persists through a single run of
the app, but all data is reset once the app is exited.
* An onboarding tutorial explaining the timeline creation process.
* Editing timeline upload functionality
* Ability to toggle from editing profile status and public profile status
* Many device APIs are supported (check out the "SDK API Reference" on the [Expo website](https://docs.expo.io/versions/v35.0.0/introduction/why-not-expo/)), but not all iOS and Android APIs are available yet
