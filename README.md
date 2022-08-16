# 💻 Personal Website

##### My personal website. The site is fully responsive and includes a hero, about, portfolio, and contact section. The form submission is handled on the clientside which allows the site to be hosted on most static website hosting platforms.



## 📖 Features
 - Fully Responsive
 - Darkmode
 - Pure (S)CSS
 - Clientside Form Submissions


## 👩‍💻 Live Website

### [enflorian.com](https://enflorian.com)


## 🖼 Offline Demo
#### Mobile Preview
![Desktop Demo](/demo/personal-website-desktop-demo.gif)

#### Mobile Preview
![Desktop Demo](/demo/personal-website-mobile-demo.gif)








## ⚒ Installation/Setup
The installation requires at least **node version 10.4**

```Shell
# run in the root directory of the project
npm install
npm run start
# run in the root directory of the project
yarn install
yarn run start
```


## 📚 Technical Informations

#### Technologies used

| Technology              | Description                            |
|-------------------------|----------------------------------------|
| React                   |   For the frontend.                    |
| SCSS                    |   Styling                              |
| React Context           |   Global state management, Darkmode    |
| Email.js                |   Form Submissions                     |

#### Implementation

The Site used Email.js to handle the submission of the contact form, this allows the site to be statically hosted. To manage the global state a combination of React Hooks and React Context is used.

