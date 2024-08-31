# Facebook Authentication in React

This project demonstrates how to implement Facebook authentication in a React application using the `react-facebook-login` package.

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Configuration](#configuration)
- [Usage](#usage)
- [License](#license)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repo/facebook-auth-react.git
   cd facebook-auth-react
   ```

Install Dependencies

Install the required packages using npm or yarn:

npm install

Setup

1. Create a Facebook App
   To use Facebook Login, you'll need to create a Facebook app and get an App ID.

Go to the Facebook Developers website.
Click on "My Apps" and then "Create App."
Follow the instructions to create your app.
Once created, navigate to your app's dashboard to find your App ID. 2. Configure Facebook App
Make sure your Facebook app is set up to allow authentication:

In the Facebook App Dashboard, go to Settings > Basic.
Add your domain to the App Domains field.
In Products > Facebook Login > Settings, set the Valid OAuth Redirect URIs to your website's login URL.
For local development, you might need to use a tool like ngrok to create an HTTPS tunnel. 3. Update the App ID in the Code
Replace the appId in the LoginForm component with your Facebook App ID.

const FB_ID = "YOUR_FACEBOOK_APP_ID";
