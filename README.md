Silicon-Valley-Economic-Trends

The major goals of the application are:

- To show the users the overall view about the economy growth of Silicon Valley
- To show how education contributes to the rapid changes of the area
- To provide the users with information about startups companies in Silicon Valley and San Francisco, which helps them identify the opportunity for small companies to develop

TECHNOLOGY STACK
The website has 3 major components in its tech stack.
Frontend:
	The user interface is built using React JS. React JS provides an easy to use, flexible library which can wrap the html components and styling libraries. React JS also provides reusability which is of utmost importance in such kind of websites, where we need to display similar graph components number of times.
	Highchart JS & Canvas JS are 2 chart libraries which can be integrated with React JS. These libraries provide the flexibility of including any kind of chart/ graph desired. They also provide different color schemes and sizing options to best suit the website.
Backend:
	The APIs or web services are built on NodeJS. The web server holds the main logic of extracting the information from the graph data we have and provide it to the frontend on request 
Database:
	The graph data is stored on MongoDB. MongoDb is a document based database which means we can store a json object into our database ,which helps us to avoid parsing of data required by NodeJS. Also helps us to alter the data easily since no schema is required.

APPLICATION OVERVIEW
This website is constructed of:
- A Homepage that directs the user to different dashboards.
- A dashboard that illustrates the employment trends of Silicon Valley with potential comparisons with other states and counties.
- A dashboard that details the educational growth of Silicon Valley over the years with respect to graduate rate, different levels of educational attainment, etc.
- A dashboard that shows the growing innovation and startup trends in Silicon Valley.

HOW TO RUN THIS APPLICATION

To clone repository (macOS):
git clone https://github.com/akshayaprabakaran/Job-Tracking-Web-Application.git


For quick startup after cloning repo (macOS):
Database
Install mongoDB
mongod --dbpath=<path to the database store>
  
Client:
cd Silicon-Valley-Economoc-Trends
cd client 
npm install 

Server:
cd Silicon-Valley-Economoc-Trends
cd server 
npm install
npm run dev

