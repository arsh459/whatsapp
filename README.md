# Whatsapp Web Clone

It is a web application in which realtime conversation can happen between multiple users just like whatsapp web.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Installation](#installation)

## Project Overview

### Key Features

- Login, Signup using jwt Authentication.
- Realtime user conversation using web socket.
- Multiple Images/pdf/docs sending functionality.

### Technologies Used

- React.js, Express.js, NodeJs, MongoDB
- Redux, Slices
- Tailwind Css

### Screenshots/Demo

- Login Page

![Login Page](./whatsapp_fe/public/images/ss/LoginPage.PNG)

- Register Page

![Register Page](./whatsapp_fe/public/images/ss/RegisterPage.PNG)

- Registering User

![Registering User](./whatsapp_fe/public/images/ss/Registering.PNG)

- Sending message to Muskan

![Registering User](./whatsapp_fe/public/images/ss/sendingMessage.PNG)

- Sending pdf to Arsh and he is online

![Registering User](./whatsapp_fe/public/images/ss/PdfSent.PNG)

- Sending multiple files

![Registering User](./whatsapp_fe/public/images/ss/MultipleFiles.PNG)

- Images sent to Arsh and he is online

![Registering User](./whatsapp_fe/public/images/ss/ImagesSent.PNG)

## Getting Started

Providing the steps to run application in your local machine.

### Installation

1. Clone the repository into your local machine.

```bash
# Cloning repository
git clone https://github.com/arsh459/whatsapp.git
```

2. Install dependencies.

```bash
# Installing dependencies frontend
cd whatsapp_fe
npm install

# Installing dependencies backend
cd whatsapp_be
npm install
```

### Run the application

1. Set Environment Variables. These are demo environment variables, You can set your own variables.

```bash

# in whatsapp_be
PORT=8000
NODE_ENV=development
DATABASE_URL=mongodb+srv://arshgoyal459:Zxcvbnm1@cluster0.0lsykzj.mongodb.net/whatsapp?retryWrites=true&w=majority
ACCESS_TOKEN_SECRET=Zxcvbnm1@
REFRESH_TOKEN_SECRET=Newretypenew1@
DEFAULT_PICTURE=https://res.cloudinary.com/dkd5jblv5/image/upload/v1675976806/Default_ProfilePicture_gjngnb.png
DEFAULT_STATUS=Hey there ! I am using whatsapp
CLIENT_ENDPOINT=http://localhost:3000


# in whatsapp_fe
REACT_APP_API_ENDPOINT=http://localhost:8000/api/v1
REACT_APP_DARK_BACKGROUND=https:res.cloudinary.com/dmhcnhtng/image/upload/v1677358270/Untitled-1_copy_rpx8yb.jpg
REACT_APP_CLOUD_NAME=druzo4mjl
REACT_APP_CLOUD_SECRET=zj7ivgjc
REACT_APP_API_KEY=911762391998374

```

2. Start the application.

```bash
# Installing dependencies frontend
cd whatsapp_fe
npm start

# Installing dependencies backend
cd whatsapp_be
npm run dev
```
