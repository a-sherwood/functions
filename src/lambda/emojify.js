translate = require("moji-translate");

// console.log(translate.getAllEmojiForWord(':eyes:'));
// console.log(translate.translate("the house is on fire and the cat is eating the cake"));

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: translate.translate(
      "the house is on fire and the cat is eating the cake!"
    )
  });
};
