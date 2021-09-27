# Auth homework 

### steps

1. used the link to access token: https://www.oauth.com/playground/authorization-code.html

<img width="1280" alt="Screen Shot 2021-09-26 at 10 04 12 PM" src="https://user-images.githubusercontent.com/8752571/134969122-59b00798-286b-416c-9408-217b0b1e3088.png">

2. Verify state param


<img width="1270" alt="Screen Shot 2021-09-26 at 10 16 40 PM" src="https://user-images.githubusercontent.com/8752571/134969130-bcfa19ca-3efa-4b5c-83db-72352b40af75.png">

3. created token

<img width="1511" alt="Screen Shot 2021-09-26 at 10 17 30 PM" src="https://user-images.githubusercontent.com/8752571/134969136-34789932-b9a0-45e0-aed2-cda8a9105123.png">

<img width="1269" alt="Screen Shot 2021-09-26 at 10 21 36 PM" src="https://user-images.githubusercontent.com/8752571/134969137-fad6c892-66b5-424c-9385-bdb01f45db07.png">

5. using the okta credential to login
6. generated client_id and secret for testing
7. Created a certificate to run it locally so that we can support Https - localhost.pem files

    `brew install mkcert `
6. Tried with the demo credentials provided by: https://www.oauth.com/playground/authorization-code.html

7. Had to enable CORS in chrome otherwise it doesn't work
8. Redirect output
<img width="1608" alt="Screen Shot 2021-09-27 at 1 35 17 AM" src="https://user-images.githubusercontent.com/8752571/134969372-e355c24c-79cc-4370-bfb7-8c01605b56a4.png">
9. Also, I have tried similar with POSTMAN
    
<img width="1891" alt="Screen Shot 2021-09-27 at 12 05 33 PM" src="https://user-images.githubusercontent.com/8752571/134969839-35ff5f15-807b-41d9-a098-09d5e73bbf9f.png">

10. Few problems faced, https and Cors are a problem for client side implementation. We should have client and a server side implementation where our client maybe call an express server to access.




