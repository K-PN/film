$('.modal').on('hide.bs.modal', function(e) {
    var $v = $(e.delegateTarget).find('video');
    $v[0].pause();  // use [0] because jQuery returns a list
  });