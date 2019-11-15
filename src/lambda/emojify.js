let translate = require("moji-translate");
// let fetch = require("node-fetch");
let qs = require("qs");

// console.log(translate.getAllEmojiForWord(':eyes:'));
// console.log(translate.translate("the house is on fire and the cat is eating the cake"));

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      text: translate.translate(qs.parse(event.body).text),
      response_type: "in_channel"
    }),
    headers: { "Content-Type": "application/json" }
  });
  // let body = qs.parse(event.body);
  // fetch(body.response_url, {
  //   method: "post",
  //   body: translate.translate(body.text),
  //   headers: { "Content-Type": "text/plain" }
  // })
};
