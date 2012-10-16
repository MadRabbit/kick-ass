#
# KickAss main file
#
# Copyright (C) 2012 Nikolay Nemshilov
#

# hook up dependencies
core    = require('core')
$       = require('dom')
UI      = require('ui')

# local variables assignments
ext     = core.ext
Class   = core.Class
Element = $.Element

# glue in your files
include 'src/kick_ass'
include 'src/frames'
include 'src/table'
include 'src/stats'
include 'src/test'

exports = ext KickAss,
  version: '%{version}'
  Frames:  Frames
  Table:   Table
  Stats:   Stats
  Test:    Test
