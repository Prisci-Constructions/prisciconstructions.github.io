/* Inject Services dropdown into service page navs */
(function () {
  var navLinks = document.querySelector('.nav-links');
  if (!navLinks) return;

  var items = navLinks.querySelectorAll('li');
  var servicesLi = null;
  items.forEach(function (li) {
    var a = li.querySelector('a');
    if (a && a.textContent.trim().toLowerCase() === 'services') {
      servicesLi = li;
    }
  });
  if (!servicesLi) return;

  servicesLi.className = 'nav-has-dropdown';
  var link = servicesLi.querySelector('a');
  link.innerHTML = 'Services <span class="nav-dd-caret"></span>';

  var dd = document.createElement('div');
  dd.className = 'nav-services-dd';
  dd.innerHTML = [
    '<div>',
      '<div class="nav-dd-col-title">Waterproofing</div>',
      '<a href="terrace-waterproofing.html">Terrace Waterproofing</a>',
      '<a href="basement-waterproofing.html">Basement Waterproofing</a>',
      '<a href="bathroom-waterproofing.html">Bathroom Waterproofing</a>',
      '<a href="roof-waterproofing.html">Roof Waterproofing</a>',
      '<a href="injection-grouting.html">Injection Grouting</a>',
    '</div>',
    '<div>',
      '<div class="nav-dd-col-title">Structural</div>',
      '<a href="structural-rehabilitation.html">Structural Rehabilitation</a>',
      '<a href="concrete-repair.html">Concrete Repair</a>',
      '<a href="crack-repair.html">Crack Repair</a>',
      '<a href="expansion-joint-treatment.html">Expansion Joint Treatment</a>',
    '</div>',
    '<div>',
      '<div class="nav-dd-col-title">Diagnostics</div>',
      '<a href="structural-audit.html">Structural Audit</a>',
      '<a href="building-leak-investigation.html">Leak Investigation</a>',
    '</div>'
  ].join('');

  servicesLi.appendChild(dd);

  /* Click-to-toggle on mobile / touch */
  link.addEventListener('click', function (e) {
    var isMobile = window.innerWidth < 960;
    if (isMobile) {
      e.preventDefault();
      servicesLi.classList.toggle('open');
    }
  });

  /* Close when clicking outside */
  document.addEventListener('click', function (e) {
    if (!servicesLi.contains(e.target)) {
      servicesLi.classList.remove('open');
    }
  });
})();
