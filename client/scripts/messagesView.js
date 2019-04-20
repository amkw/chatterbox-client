var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    console.log('initialize',this.$chats);

  },

  renderMessage: function(message) {
    // render from messageView
    var html = MessageView.render(message);
    // append to chats
    this.$chats.append(html);
    console.log('renderMessage',this.$chats);

    this.$chats.find('.username').on('click',function(){
      Friends.toggleStatus();
    })

  }

};