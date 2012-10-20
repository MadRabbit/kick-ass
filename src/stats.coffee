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
    @_res[run][lib][test] = result

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
        # TODO kick out the off the beam data
        sum = 0
        for time in times
          sum += time

        summary[lib][test] = Math.round(sum / times.length)

    return summary
