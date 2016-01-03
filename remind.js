require('shelljs/global');

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
    return exec(command, {silent: true}).output
  } else {
    exec(command);
  }
}

// sync call to exec()
var answer = ask("What is HoaPTT number?");

console.log(answer);
