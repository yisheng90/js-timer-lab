// your code here:
var time = 0
var timer
$('#start').click(function () {
  timer = setInterval(function () {
    time += 1
    $('#timer').text('Time elapsed: ' + time)
  }, 1000)
})

$('#pause').click(function () {
  clearInterval(timer)
})

$('#reset').click(function () {
  clearInterval(timer)
  time = 0
  $('#timer').text('Stop Watch')
})
