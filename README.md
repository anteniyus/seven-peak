## Table of contents
* [The Guardian](#the-guardian)
* [Available Scripts](#available-scripts)
* [Deployment](#deployment)

# The Guardian

This project uses **The Guardian OpenPlatform** for fetching news.

It is implemented from scratch, and also it is responsive without using any UI framework.
It has four sections: **_Top Stories_**, **_Sports_**, **_Culture_** and **_Lifestyle_**
and you can also read an article or bookmark it to read it later.
Also, it supports live search for more user-friendly and interactive searches.

## Building

Building The Guardian requires the following tools:

- Git (obviously)
- Node.js

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

All scripts that are available in create-react-app.

> You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
>
> To learn React, check out the [React documentation](https://reactjs.org/).

## Deployment

For deployment, you can use nginx as web server.

- First create the production build with this command:

  > npm run build

- Then download the [Nginx](https://nginx.org/en/download.html) and place extracted
  folder somewhere like: _C:/nginx_.

- After that, we must change the configuration file for serving the static files
  generated in step one.
  For this, Open the nginx.conf file located in: extractedPath/conf like: _C:/nginx/conf_.

Now assuming our application build folder is the following path:

_D:/projects/the-guardian/build_

- In the conf file, change server part like below:

```text
server {
    
    listen       5050;  #or any other ports
    server_name  localhost;

    location / {
        root   "D:/projects/the-guardian/build";    #the application build folder
        try_files  $uri /index.html;
    }
}
```
Done. Start the Nginx.
