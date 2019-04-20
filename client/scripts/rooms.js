var Rooms = {

  // TODO not show duplicate rooms as options

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  add:function(roomname){


    var newOption=$('<option>'+ roomname + '</option>');
    this.$select.append(newOption);
    //
    // <option value="???">???</option>
    // find select tag and push option
  }
};