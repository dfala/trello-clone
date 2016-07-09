var data = module.exports = {};

var lists = [
    { name: 'personal', tasks: ['sleep', 'eat'] }
  , { name: 'school', tasks: ['homework', 'study for the test'] }
  , { name: 'work', tasks: ['get rich', 'get that promotion', 'slap the CEO in the face'] }
];

data.serveData = function (req, res) {
  res.send(lists);
};

data.addTask = function (req, res) {
  var listIndex = req.params.listIndex;
  lists[listIndex].tasks.push(req.body.text);
  res.send(req.body.text);
};
