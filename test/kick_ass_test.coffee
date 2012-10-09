#
# Project's main unit test
#
# Copyright (C) 2012 Nikolay Nemshilov
#
{Test, assert} = require('lovely')

describe "KickAss", ->
  KickAss = window = document = $ = null

  before Test.load module, (build, win)->
    KickAss = build
    window   = win
    document = win.document
    $        = win.Lovely.module('dom')

  it "should have a version", ->
    assert.ok KickAss.version

