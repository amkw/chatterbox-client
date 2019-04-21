var Friends = {
  friendsList:{},
  // $username=
  initialize:function(){
    $('body').on('click', '.username', function() {
      var username = event.target.innerHTML;
      console.log(username)
      Friends.toggleStatus(username);

      // Friends.toggleStatus(username)
      // App.fetch(()=>{});
      // Add class="friend", css attribute bold text
      // refresh messages render
    });
  },

  toggleStatus:function(friend){
    if (!Friends.friendsList[friend]) {
      Friends.friendsList[friend] = true;
    };
    $(`.${friend}`).addClass('friend');



  },

};