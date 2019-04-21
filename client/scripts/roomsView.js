var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

    RoomsView.$button.on('click',function(event){
      console.log(App);

      App.roomsRightNow=prompt('what is your current room?');
      Rooms.roomListObj[App.roomsRightNow]=true;
      console.log(Rooms.roomListObj);
      Rooms.add(App.roomsRightNow);//
      RoomsView.$select.val(App.roomsRightNow);
    });
    RoomsView.$select.on('click', function(event){
      App.$chat.html('');
      App.roomsRightNow=RoomsView.$select.val();
      RoomsView.filterChatByRoom();

    });
  },

  // renderRoom: function(newRoom) {
  //   var html = '<div class="room"><%= newRoom %></div>'
  //   this.$select.append(html);
  // },

  filterChatByRoom: function() {
    //input: the data returned by Parse all function

    Parse.readAll((data)=>{
      data.results.filter(message=>message.roomname===App.roomsRightNow).forEach(message=>{
        MessagesView.renderMessage(message);
      })
    })

  }

};