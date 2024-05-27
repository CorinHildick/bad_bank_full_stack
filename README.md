# Full Stack Bad Bank
A learning project for moving data through a full stack application. In progress.

## Installation Guidelines
This project uses **node** and **docker**. You can replace docker with an external database by changing the URL in `dal.js`. 

1. Set up a mongodb server with the console command `docker run -p 27017:27017 --name badbank -d mongo`. The name is arbitrary and can be changed.
2. Clone the project and navigate to the local repository.
3. In the folder containing `package.json`, run the command `npm install`.
4. In the same folder, run the command `node index.js`. The terminal will give you a link to `http://localhost:3000`, where the application will be running.

### License: MIT