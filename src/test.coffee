#
# The actual tests driver
#
# This object is basically a proxy that runs the tests
#
# Copyright (C) 2012 Nikolay Nemshilov
#
class Test

  #
  # Basic constructor
  #
  # @param {Object} options
  # @param {Object} the lib specific test implementation
  # @param {Window} the test frame context
  # @return {Test} this
  #
  constructor: (options, test, frame)->
    @options = options
    @test    = test
    @frame   = frame
    return @

  #
  # Runs a test by name and retuns the result
  #
  # @param {String} test name
  # @return {Number} test result
  #
  run: (name)->
    args = [@test[name]]

    if name == 'init'
      return @frame.init_time

    if 'make findById'.indexOf(name) isnt -1
      args.push(@options.size)
    else
      args.push(@test._list())

      if 'insertBottom insertTop insertAfter insertBefore'.indexOf(name) isnt -1
        args.push(@getElementsToInsert(@options.size))
      else
        args.push(@dummy)

    # recording the actual evaluation time
    time = new Date()
    @[name] && @[name].apply(null, args)
    new Date() - time

  # just a constant dummy function
  dummy: ->

  #
  # Builds a list of DIV to test the insert operations
  #
  # @param {Number} list size
  # @return {Array} list of DIVs
  #
  getElementsToInsert: (size)->
    `for (var list=[], i=0; i < size; i++)
      list.push(document.createElement('div'));`

    return list

#####################################################################
# The actual tests
#####################################################################

  make: `function (test, size) {
    for (var i=0; i < size; i++)
      test('someid'+i);
  }`

  findById: `function (test) {
    for (var i=0; i < 10000; i++)
      test('someid'+i);
  }`

  findByCSS: `function (test) {
    for (var i=0; i < 100; i++)
      test('ul.test');
  }`

  bind: `function (test, list, dummy) {
    for (var i=0; i < 5; i++)
      test(list, dummy);
  }`

  unbind: `function(test, list, dummy) {
    for (var i=0; i < 5; i++)
      test(list, dummy);
  }`

  set: `function(test, list) {
    for (var i=0; i < 20; i++)
      test(list, {title: 'title'});
  }`


  get: `function(test, list) {
    for (var i=0; i < 50; i++)
      test(list, 'id');
  }`


  style: `function(test, list) {
    for (var i=0; i < 5; i++)
      test(list, { backgroundColor:"#ededed", color:"#fff" });
  }`

  addClass: `function(test, list) {
    for (var i=0; i < 5; i++)
      test(list, 'test-class');
  }`

  removeClass: `function(test, list) {
    for (var i=0; i < 5; i++)
      test(list, 'test-class');
  }`

  update: `function(test, list) {
    test(list, '<li>some text</li>');
  }`


  insertTop: `function(test, list, elements) {
    //for (var i=0; i < 5; i++)
      test(list, elements);
  }`


  insertBottom: `function(test, list, elements) {
    //for (var i=0; i < 5; i++)
      test(list, elements);
  }`

  insertAfter: `function(test, list, elements) {
    //for (var i=0; i < 5; i++)
      test(list, elements);
  }`

  insertBefore: `function(test, list, elements) {
    //for (var i=0; i < 5; i++)
      test(list, elements);
  }`

  remove: `function(test, list) {
    test(list);
  }`


