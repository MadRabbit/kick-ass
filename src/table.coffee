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
  # @param {String} table caption
  # @return {Table} this
  #
  constructor: (main, caption)->
    header = "<th></th>"
    footer = '<td></td>'

    for name in main.libs
      header += "<th>#{name}</th>"
      footer += "<td></td>"

    @$super 'table', html: """
      <caption>#{caption}</caption>
      <thead><tr>#{header}</tr></thead>
    """

    @lookup = {}

    for name in main.tests
      row = new Element('tr')
      row.append new Element('td', html: KickAss.Tests[name])

      for lib in main.libs
        row.append(@lookup[name + "-" + lib] = new Element('td'))

      @append row

    @append "<tfoot><tr>#{footer}</tr></tfoot>"

    @hide().insertTo(main, 'top')



  #
  # Displays the stats in the table
  #
  # @param {Stats} stats
  # @return {Table} this
  #
  display: (stats)->
    summary = {}

    for lib, results of stats
      summary[lib] = 0
      for test, time of results
        summary[lib] += time
        @lookup[test+"-"+lib]._.innerHTML = ''+ time


    footer  = @find('tfoot td').slice(1)

    for key of summary
      footer.shift()._.innerHTML = ''+ summary[key]

    @show()
