# remind
Small script help you remember things passively

This simple call a input textbox that ask user a random question from `data.json`.

`data.json` file format:

```json
{
  "question 1": "answer 1",
  "question 2": "answer 2",
  "question 3": "answer 3"
}
```

This script call `osascript` to open a window popup so it only works in OSX for now.
