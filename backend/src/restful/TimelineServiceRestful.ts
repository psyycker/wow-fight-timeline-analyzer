import createService from "../utils/serviceBuilder";

export default createService("/timeline", (router) => {
  router.get("", (req, res) => {
    console.log("Hello");
    res.send("World");
  })
})
