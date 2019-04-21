var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(message) {
    // render from messageView
    var html = MessageView.render(message);
    console.log(html);

    // append to chats
    this.$chats.append(html);

    // add friend



  },
  currentRoomMessage:function(data){

  },

};