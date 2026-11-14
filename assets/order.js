/* Reusable ordering exercise: click chips in the correct order.
   Markup:
   <div class="exercise order" data-solution="A|B|C">
     <p>Prompt…</p>
   </div>
   The chips are generated from data-solution and shuffled. */
(function () {
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  document.querySelectorAll('.order').forEach(function (box) {
    var solution = box.dataset.solution.split('|');
    var picked = [];
    var chips = document.createElement('div'); chips.className = 'chips';
    var line = document.createElement('div'); line.className = 'answer-line';
    var fb = document.createElement('p'); fb.className = 'feedback';
    var check = document.createElement('button'); check.className = 'btn'; check.textContent = 'Check';
    var reset = document.createElement('button'); reset.className = 'btn'; reset.textContent = 'Reset';
    [check, reset].forEach(function (b) { b.type = 'button'; });

    function render() {
      line.innerHTML = '';
      picked.forEach(function (p) { var s = document.createElement('span'); s.textContent = p; line.appendChild(s); });
    }
    function build() {
      chips.innerHTML = ''; picked = []; fb.textContent = ''; fb.className = 'feedback'; render();
      shuffle(solution.slice()).forEach(function (label) {
        var c = document.createElement('button'); c.type = 'button'; c.className = 'chip'; c.textContent = label;
        c.addEventListener('click', function () { picked.push(label); c.disabled = true; render(); });
        chips.appendChild(c);
      });
    }
    check.addEventListener('click', function () {
      if (picked.length < solution.length) { fb.className = 'feedback bad'; fb.textContent = 'Place every piece first.'; return; }
      var firstWrong = picked.findIndex(function (p, i) { return p !== solution[i]; });
      if (firstWrong === -1) { fb.className = 'feedback ok'; fb.textContent = 'Correct, top to bottom.'; }
      else { fb.className = 'feedback bad'; fb.textContent = 'Position ' + (firstWrong + 1) + ' is off. Reset and try again.'; }
    });
    reset.addEventListener('click', build);
    box.appendChild(chips); box.appendChild(line); box.appendChild(check); box.appendChild(reset); box.appendChild(fb);
    build();
  });
})();
