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
  constructor: ->
    @_res = {}
    return @

  #
  # Saves the results data
  #
  # @return {Stats} this
  #
  record: (lib, test, result)->
    @_res[test+"-"+lib] = result

  #
  # Returns a refernce to the results object
  #
  # @return {Object} results
  #
  results: ->
    @_res

  #
  # Returns the summary results by library
  #
  # @return {Object} summary
  #
  summary: ->
    sum = {}

    for key of @_res
      lib = key.replace(/^[a-z]+\-/i, '')
      sum[lib] or= 0
      sum[lib] += @_res[key]

    return sum
