$(document).ready(function() {

  // Attach an event listener on each li (tab)
  $('.tabs li').on('click', function() {

    // Remove classes from non-active elements, which hides them (see CSS styles)
    $('.tab, .tabs li').removeClass('active')

    // Switch up the tab
    var tab = $(this)
    tab.addClass('active')
    $('#' + tab.data('tab')).addClass('active')

    // Load a page fragment into the tab body if the tab has a data-url attribute
    if ($(this).data('url')) {

      // $('#' + tab.data('tab')).load($(this).data('url'), function() {
      //   $('form').validate()
      // })

      // is the same as...

      // $('#portfolio').load('portfolio.html', function() {
      //   $('form').validate()
      // })

      // is the same as...


      $.ajax({
        method: 'GET',
        url: tab.data('url'),
        cache: false,
        success: function(page) {
          $('#' + tab.data('tab')).html(page)
          $('form').validate({
            rules: {
              phone: {
                phoneUS: true
              }
            }
          })
        }
      })

    }

  })

  // Simulate a click
  $('.tabs li:first').click()

})
