let translate = require("moji-translate");
let qs = require("qs");

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      text: translate.translate(qs.parse(event.body).text),
      response_type: "in_channel"
    }),
    headers: { "Content-Type": "application/json" }
  });
};
