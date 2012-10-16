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
    footer = '<td></td>'

    for name in main.libs
      header += "<th>#{name}</th>"
      footer += "<td></td>"

    super 'table', html: "<thead><tr>#{header}</tr></thead>"

    @lookup = {}

    for name in main.tests
      row = new Element('tr')
      row.append new Element('td', html: KickAss.Tests[name])

      for lib in main.libs
        row.append(@lookup[name + "-" + lib] = new Element('td'))

      @append row

    @append "<tfoot><tr>#{footer}</tr></tfoot>"

    @insertTo(main)

  #
  # Displays the stats in the table
  #
  # @param {Stats} stats
  # @return {Table} this
  #
  display: (stats)->
    results = stats.results()
    summary = stats.summary()
    footer  = @find('tfoot td').slice(1)

    for key of results
      @lookup[key]._.innerHTML = ''+ results[key]


    for key of summary
      footer.shift()._.innerHTML = ''+ summary[key]

    return @
