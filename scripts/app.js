jQuery(document).ready(function () {
  jQuery('.one').addClass('animated slideInUp');
  jQuery('.two').addClass('animated slideInUp');
  jQuery('.three').addClass('animated slideInUp');
  jQuery('.four').addClass('animated slideInUp');
  jQuery('.five').addClass('animated slideInUp');
  jQuery('.six').addClass('animated slideInUp');
  jQuery('.seven').addClass('animated slideInUp');

  jQuery('.box__content').addClass('hidden').viewportChecker({
    classToAdd: 'animated  pulse',
    offset: 400,
    classToRemove: 'hidden',
  });

  jQuery('.figure_1').addClass('hidden').viewportChecker({
    classToAdd: 'animated fadeInLeft',
    offset: 400,
    classToRemove: 'hidden',
  });

  jQuery('.figure_2').addClass('hidden').viewportChecker({
    classToAdd: 'animated  fadeInLeft',
    offset: 400,
    classToRemove: 'hidden',
  });

  jQuery('.figure_3').addClass('hidden').viewportChecker({
    classToAdd: 'animated fadeInRight',
    offset: 400,
    classToRemove: 'hidden',
  });

  jQuery('.figure_4').addClass('hidden').viewportChecker({
    classToAdd: 'animated fadeInRight',
    offset: 400,
    classToRemove: 'hidden',
  });

  jQuery('.item-all').addClass('hidden').viewportChecker({
    classToAdd: 'animated slideInUp',
    offset: 400,
    classToRemove: 'hidden',
  });

  jQuery('.AllProductsBtn').addClass('hidden').viewportChecker({
    classToAdd: 'animated slideInUp',
    offset: 400,
    classToRemove: 'hidden',
  });

  jQuery('.Banner__title').addClass('hidden').viewportChecker({
    classToAdd: 'animated slideInLeft',
    offset: 400,
    classToRemove: 'hidden',
  });

  jQuery('.Banner__Details').addClass('hidden').viewportChecker({
    classToAdd: 'animated slideInRight',
    offset: 400,
    classToRemove: 'hidden',
  });

  jQuery('.subscribe ').addClass('hidden').viewportChecker({
    classToAdd: 'animated zoomIn',
    offset: 400,
    classToRemove: 'hidden',
  });

  jQuery('.brandFooter__left ').addClass('hidden').viewportChecker({
    classToAdd: 'animated slideInLeft',
    offset: 400,
    classToRemove: 'hidden',
  });

  jQuery('.one__menu').addClass('hidden').viewportChecker({
    classToAdd: 'animated slideInUp',
    offset: 400,
    classToRemove: 'hidden',
  });

  jQuery('.two__menu').addClass('hidden').viewportChecker({
    classToAdd: 'animated slideInUp',
    offset: 400,
    classToRemove: 'hidden',
  });

  jQuery('.three__menu').addClass('hidden').viewportChecker({
    classToAdd: 'animated slideInUp',
    offset: 400,
    classToRemove: 'hidden',
  });
});
