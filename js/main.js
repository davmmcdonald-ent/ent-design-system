$(document).ready(function() {
    $('.sidebar__section-title').on('click', function() {
        const $this = $(this);
        const $list = $this.next('.sidebar__list');

        // Toggle the active state
        $('.sidebar__section-title').not($this).removeClass('sidebar__section-title--active');
        $this.toggleClass('sidebar__section-title--active');

        // Slide up all lists except the current one
        $('.sidebar__list').not($list).slideUp();
        $list.slideToggle();
    });

    $('.sidebar__link').on('click', function(event) {
        event.preventDefault();
        const page = $(this).data('page');

        // Highlight the active item
        $('.sidebar__item').removeClass('sidebar__item--active');
        $(this).parent().addClass('sidebar__item--active');

        // Load the content
        $('#content').load('pages/' + page);
    });

    // Initialize default page
    $('.sidebar__section-title').first().addClass('sidebar__section-title--active');
    $('.sidebar__item').first().addClass('sidebar__item--active');
    $('.sidebar__list').first().show();
    $('#content').load('pages/design-guidelines/color-palette.html');
});