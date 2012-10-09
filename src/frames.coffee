#
# This element builds the test frames block
#
# Copyright (C) 2012 Nikolay Nemshilov
#
class Frames extends Element

  #
  # constructor
  #
  # @param {KickAss} main
  # @return {Frames} this
  #
  constructor: (main)->
    @$super 'div', class: 'frames'

    html = ""
    for name in main.libs
      html += "<iframe src='test/page.html##{name}'></iframe>"

    @html(html).insertTo(main)