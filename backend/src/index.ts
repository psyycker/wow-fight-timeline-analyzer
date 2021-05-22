import express from 'express'
import timelineService from "restful/TimelineServiceRestful";
import reportService from "restful/ReportRestful";

const PORT = 4000

const app = express()
timelineService(app);
reportService(app);


app.listen(PORT, () => {
  console.log(`\n🚀      GraphQL is now running on http://localhost:${PORT}`)
})
