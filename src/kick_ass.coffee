#
# Project's main unit
#
# Copyright (C) 2012 Nikolay Nemshilov
#
class KickAss extends Element
  extend:
    Options:
      size: 200   # the amount of dom elements to be created
      runs: 4     # number of runs for every step
      tests: null # test names in an array or `null` to run everything

    Tests:
      make:          "Elements building"
      find:          "Access an element by ID"
      bind:          "Add an event listener"
      unbind:        "Remove an event listener"
      set:           "Set an element attribute"
      get:           "Get an element attribute"
      style:         "Assign an element style"
      addClass:      "Add css-class"
      removeClass:   "Remove css-class"
      update:        "Set new html content"
      insertBottom:  "Insert element bottom"
      insertTop:     "Insert element on top"
      insertAfter:   "Insert element after"
      insertBefore:  "Insert element before"
      remove:        "Remove element"

  #
  # Basic constructor, builds the UI
  #
  # @param {Object} options
  # @return {KickAss} this
  #
  constructor: (options)->
    options = @setOptions(options)
    super 'div', class: 'kick-ass'

    @frames = new Frames(@)
    @table  = new Table(@)

    return @

  #
  # Sets the options
  #
  # @param {Object} options
  # @return {Object} cleaned options
  #
  setOptions: ->
    options = UI.Options.setOptions.apply(@, arguments)

    @tests  = options.tests || core.Hash.keys(KickAss.Tests)
    delete(options.tests)

    @libs = []

    for key in ['lovely', 'rightjs', 'jquery', 'mootools', 'dojo', 'yui']
      if key of options
        @libs.push(key + "-" + options[key])
        delete(options[key])

    return options

  #
  # Starts the test running
  #
  # @return {KickAss} this
  #
  start: ->
    return @
