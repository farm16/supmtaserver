import GtfsRealtimeBindings from "gtfs-realtime-bindings";
import request from "request";

export default function getMtaData() {
  var requestSettings = {
    method: "GET",
    url: "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-l",
    encoding: null,
    headers: { "x-api-key": "ejMWxVC6yT9m7q3CFEND6934KJhBkwpg4FlZw5y5" }
  };
  request(requestSettings, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(body);
      let arr = [];
      feed.entity.forEach(function(entity) {
        if (entity) {
          arr.push(entity);
          console.log(entity);
        }
      });
      console.log(arr.length);
      //console.log(arr);
    } else {
      console.log(error);
    }
  });
}
