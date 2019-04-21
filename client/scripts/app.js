var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  $refresh: $('.refreshChat'),
  roomsRightNow: "lobby",
  $chat: $('#chats'),


  initialize: function() {
    App.username = window.location.search.substr(10);

    console.log("username:",App.username);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    Friends.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    App.$refresh.on('click', function(){
      App.$chat.html('');
      App.fetch();
    });


  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // render all the messages
      console.log(data);
      data.results.filter(message => message.text && message.username &&  message.roomname)
      .forEach(message => {
        MessagesView.renderMessage(message)}
      );

      var roomNames = data.results.filter(message => message.roomname).forEach(element => {
        // console.log(element.roomname);
        Rooms.renderRoomsList(element.roomname)}
      );
      // RoomsView.$select.val(App.roomsRightNow);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },


  // refresh: function() {
  //   // setInterval(function() {
  //   //   console.log(this);
  //   //   App.$chat.html('Refershed it ');
  //   //   App.fetch();
  //   //   console.log('trigged');
  //   // },60000);

  // }

};