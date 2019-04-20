var Rooms = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  roomListObj: {},//di


  renderRoomsList:function(roomname){

    if (!this.roomListObj[roomname]) {
      var newOption=$('<option>'+ roomname + '</option>');
      // TODO default in dropdown is lobby App.roomsRightNow
      // this.$select.append($('<option>'+ App.roomsRightNow + '</option>'))
      this.$select.append(newOption);
      this.roomListObj[roomname] = true;

    }
  },

  add:function(newRoom){
    var newOption = $('<option>' + newRoom + '</option>');
    this.$select.append(newOption);
    //button room id
  },
};