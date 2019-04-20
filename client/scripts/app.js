var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  roomsRightNow: 'lobby',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    App.autoRefresh();
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
        console.log(element.roomname);
        Rooms.add(element.roomname)}
      );

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

  autoRefresh: function() {
    // TODO clear html before re-rendering
    setInterval(function() {
      App.fetch();
      console.log('trigged');
    },60000);
  }

};
