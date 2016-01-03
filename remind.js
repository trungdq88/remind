require('shelljs/global');
var fs = require('fs');

fs.readFile('data.json', 'utf8', function (err, data) {
  if (!err) {
    data = JSON.parse(data);
    onReady(data);
  } else {
    console.error(err);
  }
});

var ask = function (question, defaultAnswer, callback) {
  var escape = function (str) {
    return str.replace(/(['"])/g, '\\$1');
  };
  if (!question) {
    question = '';
  } else {
    question = escape(question);
  }
  if (!defaultAnswer) {
    defaultAnswer = '';
  } else {
    answer = escape(answer);
  }

  var command = 'osascript -e \'Tell application "System Events" to display dialog "' + question + '" default answer "' + defaultAnswer + '"\' -e \'text returned of result\' 2>/dev/null';
  if (!callback) {
    return exec(command, {silent: true}).output.trim();
  } else {
    exec(command);
  }
}

var onReady = function (data) {
  var keys = Object.keys(data);
  console.log(data);
  var key = keys[Math.floor(Math.random() * keys.length)];
  var result = false;
  while (!result) {
    var answer = ask(key);
    console.log(answer, ' - ', data[key]);
    if (answer === data[key]) {
      result = true;
    } else {
      result = false;
    }
  }
};

