// GET -> api/mta/feed/l
import getMtaData from "../../utils/getMtaData.js";

export default {
  liveFeed: function(req, res) {
    res.send("train L feed logged !!!");
    getMtaData();
    //console.log("live feed ");
  }

  // function() {
  //   console.log("hello");
  // }
};
