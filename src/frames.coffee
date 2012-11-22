#
# This element builds the test frames block
#
# Copyright (C) 2012 Nikolay Nemshilov
#
class Frames extends Element

  #
  # constructor
  #
  # @param {KickAss} main
  # @return {Frames} this
  #
  constructor: (main)->
    @$super 'div', class: 'frames'

    html = ""; @main = main
    for name in main.libs
      html += "<iframe src='test/page.html?#{new Date().getTime()}##{name}' name='kick_ass_#{name}'></iframe>"

    @html(html).insertTo(main)

    @tests = {}


    return @

  #
  # Builds the actual tests list
  #
  # @return {Frames} this
  #
  prepare: ->
    @tests = {}
    for lib in @main.libs
      frame = window.frames['kick_ass_'+ lib]
      frame.document.body.innerHTML = ''
      @tests[lib] = new Test(@main.options, frame.Test)

    return @


  #
  # Runs the test on all the frames
  #
  # @param {String} test names
  # @return {Frames} this
  #
  run: (tests)->
    @prepare()

    for name in tests
      for lib of @tests
        @emit 'result', lib: lib, test: name, time: @tests[lib].run(name)

    return @


