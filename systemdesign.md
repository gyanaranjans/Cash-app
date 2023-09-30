# System Design Document


![Architecture](https://images.clickittech.com/2020/wp-content/uploads/2022/03/10202347/Diagram-54-scaled.jpg)

## Frontend
The frontend will be a React application, leveraging the power of React's component-based architecture for a scalable and maintainable system. This will allow for easy integration of new features and UI improvements.

```markdown
- React.js: A JavaScript library for building user interfaces.
- Redux: A predictable state container for JavaScript apps.
- Axios: Promise-based HTTP client for the browser and node.js.
```

## Backend



The backend will be built using Node.js, which is a JavaScript runtime built on Chrome's V8 JavaScript engine. This allows for the use of JavaScript for both the frontend and backend, enabling developers to leverage their existing skills. 

```markdown
- Node.js: JavaScript runtime that allows the use of JavaScript on the server side.
- Express.js: Web application framework for Node.js.
- MongoDB: A NoSQL database that provides high availability, high performance, and easy scalability.
```


## Database



The database will be MongoDB, a NoSQL database. MongoDB is a document database with an emphasis on horizontal scaling and flexibility. It supports CRUD operations, indexing, and a variety of query operations.

```markdown
- MongoDB: A document database that provides high performance, easy scalability, and flexibility.
- User Collection: This collection will store user information such as name, email, date of birth, and other details.
- Video Collection: This collection will store video information such as title, streamURL, tags, etc. We will also store the corresponding userID.
```


## Cloud Services

![Cloud Services Architecture](https://images.clickittech.com/2020/wp-content/uploads/2022/03/10202353/Diagram-55-scaled.jpg)

For the cloud services, we will use AWS for hosting our application. AWS provides a variety of services that can be used to build a robust and scalable application.

```markdown
- AWS EC2: Provides resizable compute capacity in the cloud.
- AWS S3: Object storage service that offers industry-leading scalability, data availability, security, and performance.
- AWS RDS: A managed relational database service.
- AWS Lambda: A serverless compute service that runs your code in response to events and automatically manages the underlying compute resources for you.
- AWS API Gateway: A fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.
```


## User Authentication and Authorization

![User Authentication and Authorization](https://lh3.googleusercontent.com/1Qf7q_JHiBmMhedZfjtJ63NW3XgYI4g3VW31FF6m6nVXPnNkyYnxZic1SsImeZ8oKeBQHP9-F4-oVI8UMwpWKQWSA4aKbVPbrzJ5ApWfqLl2wW34LXBPPRFcnh2_AZsyw1kpNYvhvE1ItTfW4xiyqU0)

For user authentication and authorization, we will use JSON Web Tokens (JWT). JWT is a compact, URL-safe means of representing claims to be transferred between two parties.

```markdown
- JWT: JSON Web Token for user authentication and authorization.
- Passport.js: Middleware for Node.js that provides a full-featured, express-compatible implementation of OAuth 2.0.
```

## Security Measures and Data Encryption

To ensure the security of our application, we will use HTTPS for all communication between the client and the server. This will ensure that the data transmitted over the network is encrypted and secure.

```
- HTTPS: Secure communication between a web browser and a website.
- Bcrypt: A password-hashing function designed by Niels Provos and David Mazières.
- Helmet.js: Helps secure Express apps by setting various HTTP headers.
```
## Scalability and Database Optimization

![Load Balancing](https://www.red-gate.com/simple-talk/wp-content/uploads/2019/04/load-balancer-read-write-application-auto-scali.png)

For scalability, we will use a combination of load balancing and auto-scaling. This will ensure that our application can handle a large number of requests and can scale up or down as needed.

```
- Load Balancing: Distributes network or application traffic across multiple servers to ensure no single server bears too much demand.
- Auto Scaling: Automatically adjusts the number of instances based on demand.
- Indexing: Indexes are used to speed up the search for data.
- Caching: Caching is a method for storing data so that future requests for that data can be served faster.
```


## Deployment Plan
![Deployment](https://learn.microsoft.com/en-us/azure/deployment-environments/media/overview-what-is-azure-deployment-environments/azure-deployment-environments-scenarios.png)

For deploying the application on AWS, we will use AWS CodeStar, a fully managed service that provides a complete development and deployment pipeline. This will simplify the deployment process and ensure that the application is always up-
