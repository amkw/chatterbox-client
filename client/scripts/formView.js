var FormView = {

  $form: $('form'),
  $select: $('#rooms select'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    console.log(Messages)

    Messages.messageRightNow.text=$('#message').val();
    Messages.messageRightNow.roomname=FormView.$select.val();
    Parse.create(Messages.messageRightNow);

    $('#message').html('')
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};