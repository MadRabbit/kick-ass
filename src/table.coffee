#
# Builds the output spreadsheed table
#
# Copyright (C) 2012 Nikolay Nemshilov
#
class Table extends Element

  #
  # Constructor
  #
  # @param {Object} libraries
  # @param {Object} test names
  # @return {Table} this
  #
  constructor: (libs, tests)->
    header = "<th></th>"

    for name in libs
      header += "<th>#{name}</th>"

    super 'table', html: "<tr>#{header}</tr>"

    @lookup = {}

    for name in tests
      row = new Element('tr')
      row.append new Element('td', html: KickAss.Tests[name])

      for lib in libs
        res = new Element('td')
        @lookup[name + "-" + lib]
        row.append res

      @append row

    return @