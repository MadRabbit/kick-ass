#
# Builds the output spreadsheed table
#
# Copyright (C) 2012 Nikolay Nemshilov
#
class Table extends Element

  #
  # Constructor
  #
  # @param {KickAss} main object
  # @return {Table} this
  #
  constructor: (main)->
    header = "<th></th>"

    for name in main.libs
      header += "<th>#{name}</th>"

    super 'table', html: "<tr>#{header}</tr>"

    @lookup = {}

    for name in main.tests
      row = new Element('tr')
      row.append new Element('td', html: KickAss.Tests[name])

      for lib in main.libs
        res = new Element('td')
        @lookup[name + "-" + lib]
        row.append res

      @append row

    @insertTo(main)