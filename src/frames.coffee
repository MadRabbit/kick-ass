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
  prepare: ->
    @tests = {}
    for lib in @main.libs
      @tests[lib] = new Test(@main.options, window.frames['kick_ass_'+ lib].Test)

    return @


  #
  # Runs the test on all the frames
  #
  # @param {String} test name
  # @return {Frames} this
  #
  run: (name)->
    for lib of @tests
      @tests[lib].run(name)
