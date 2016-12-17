// your code here:
var timer = {
  seconds: 0,
  timerId: 0,

  updateTime: function updateTime () {
    this.seconds += 1
    $('#timer').text('Time elapsed: ' + this.seconds)
  },

  setupListeners: function () {
    $('#start').click(function () {
      clearInterval(this.timerId)
      this.timerId = setInterval(this.updateTime.bind(this), 1000)
    }.bind(this)),

    $('#pause').click(function () {
      clearInterval(this.timerId)
    }.bind(this))

    $('#reset').click(function () {
      clearInterval(this.timerId)
      this.seconds = 0
      $('#timer').text('Stop Watch')
    }.bind(this))
  }
}

timer.setupListeners()
