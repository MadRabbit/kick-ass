#
# This file collects the test results and calculates
# the stats
#
# Copyright (C) 2012 Nikolay Nemshilov
#
class Stats

  #
  # Constructor
  #
  # @return {Stats} this
  #
  constructor: (main)->
    @_res = []

    for i in [0...main.options.runs]
      @_res[i] = {}

      for lib in main.libs
        @_res[i][lib] = {}

    return @

  #
  # Saves the results data
  #
  # @return {Stats} this
  #
  record: (run, lib, test, result)->
    @_res[run][lib][test] = result || 1

  #
  # Returns a refernce to the results object
  #
  # @return {Object} results
  #
  results: (run)->
    @_res[run]

  #
  # Returns the summary results by library
  #
  # @return {Object} summary
  #
  summary: ->
    summary = {}

    # collecting the data
    for res in @_res
      for lib, data of res
        summary[lib] or= {}

        for test, time of data
          summary[lib][test]  or= []
          summary[lib][test].push time

    # calculating the average
    for lib, tests of summary
      for test, times of tests
        summary[lib][test] = dirty_average(times)

    return summary


# private

#
# A simple filter that kicks out the obviously off the beam records
# and then calculates the average of the remaining items
#
# TODO replace me with an actually scientific calculations :)
#
dirty_average = (items)->
  clean = []; threshold = 2; avg = 0

  # kicking out the off-the-beam values
  for i1 in items
    off_the_beam = true

    for i2 in items
      if i1 isnt i2
        diff = if i1 < i2 then i2 / i1 else i1 / i2
        off_the_beam &= diff > threshold # checking if it's consistently off the beam

    clean.push(i1) unless off_the_beam

  clean = items if clean.length is 0 # failsafe in case it kicked out everything

  # calculating the average
  for item in clean
    avg += item

  Math.round(avg / (clean.length || 1))


