#
# Project's main unit
#
# Copyright (C) 2012 Nikolay Nemshilov
#
class KickAss extends Element
  extend:
    Options:
      size:   800  # the amount of dom elements to be created
      runs:   4    # how many times a test should be run
      tests:  null # test names in an array or `null` to run everything
      native: true # show raw DOM test

    Tests:
      #init:          "Initialization time"
      make:          "Elements building"
      findById:      "Access an element by ID"
      findByCSS:     "Access by a CSS rule"
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
    super 'div', class: 'kick-ass'

    @setOptions(options)

    @frames = new Frames(@)
    @stats  = new Stats(@)

    @on 'result', (event)->
      @stats.record(@runs, event.lib, event.test, event.time)

    return @

  #
  # Sets the options
  #
  # @param {Object} options
  # @return {Object} cleaned options
  #
  setOptions: ->
    options = UI.Options.setOptions.apply(@, arguments)
    @tests  = @options.tests || core.Hash.keys(KickAss.Tests)
    @libs   = if @options.native then ['native'] else []

    for key in options.libs
      @libs.push(key)

    return @

  #
  # Starts the test running
  #
  # @return {KickAss} this
  #
  start: ->
    @clear().append(@frames)

    @runs = 0
    @nextRun()

    return @

  #
  # Renders the summary table
  #
  # @return {KickAss} this
  #
  finish: ->
    table = new Table(@, "Summary")
    table.display(@stats.summary())

    return @


  #
  # Makes the next run
  #
  # @return {KickAss} this
  #
  nextRun: ->
    table  = new Table(@, "Run: #{@runs + 1}")

    setTimeout =>
      @frames.whenReady =>
        @frames.run(@tests)

        table.display(@stats.results(@runs))

        @runs += 1

        if @runs < @options.runs
          @nextRun()
        else
          @finish()
    , 500 # rendering current table and resetting

    return @

