#
# Project's main unit
#
# Copyright (C) 2012 Nikolay Nemshilov
#
class KickAss extends Element
  include: UI.Options
  extend:
    Options:
      size: 200 # the amount of dom elements to be created
      runs: 4   # number of runs for every step

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


  #
  # Starts the test running
  #
  # @return {KickAss} this
  #
  start: ->
    return @