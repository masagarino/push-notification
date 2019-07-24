/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const webPush = require('web-push');

const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/f3ha-BdKnZQ:APA91bFXB6myZC605qZ-djb72UbGNCF9Ko5HCYkfMMEHL5GWxWVZK_JzkFJIcsFoaBTTbLihOISRoYzsKbf6Z8a2LVUYJkYqg2msBbSnEV-M4_X3sG3u_Gg7TwcDQ6_RYa4N4QrwOflN","expirationTime":null,"keys":{"p256dh":"BMJ3HdzFmFNr9fA3qQB5pM082ElA1L1kTzDcCFAIUYHZ0PJyafc-xFfxY1EC8xVHCLTP1f-SA7V6PGpoOd5LsHY","auth":"EXcgOcaPPhF7hzNuB1mZjw"}};

const vapidPublicKey = 'BCwShOm6SPGJ2SX6zQNLR1peM26ddlEfmzT_LW-2Ckz5OINYD-6aXy8S5y0HAX7XF9vd8riP5ZYCoqULR5-c1Gs';
const vapidPrivateKey = 'J_Rx_Hdv4iaWmkUryrgIZZT83HXEpjwLbcqb2UoB7Cg';

const payload = 'Here is a payload!';

const options = {
  // gcmAPIKey: 'YOUR_SERVER_KEY',
  TTL: 60,
  vapidDetails: {
    subject: 'mailto:YOUR_EMAIL_ADDRESS',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  }
};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);
