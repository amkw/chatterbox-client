var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(message) {
    // render from messageView
    var html = MessageView.render(message);


    // append to chats
    this.$chats.append(html);

    // add friend
    this.$chats.find('.username').on('click',function(){
      Friends.toggleStatus();
    })


  }

};