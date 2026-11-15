/* Reusable "pick the right feature" matching exercise.
   Markup:
   <div class="exercise match" data-options="Option A|Option B|Option C">
     <div class="m-row" data-answer="Option B">Requirement text</div>
     …
   </div>
   Each row gets a dropdown (shuffled options); one Check button grades all rows. */
(function () {
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  document.querySelectorAll('.match').forEach(function (box) {
    var options = box.dataset.options.split('|');
    var rows = box.querySelectorAll('.m-row');
    rows.forEach(function (row) {
      var sel = document.createElement('select');
      sel.className = 'm-select';
      var blank = document.createElement('option'); blank.value = ''; blank.textContent = 'Choose…'; sel.appendChild(blank);
      shuffle(options.slice()).forEach(function (o) { var op = document.createElement('option'); op.value = o; op.textContent = o; sel.appendChild(op); });
      var mark = document.createElement('span'); mark.className = 'm-mark';
      row.appendChild(document.createElement('br')); row.appendChild(sel); row.appendChild(mark);
    });
    var btn = document.createElement('button'); btn.type = 'button'; btn.className = 'btn'; btn.textContent = 'Check';
    var fb = document.createElement('p'); fb.className = 'feedback';
    btn.addEventListener('click', function () {
      var right = 0;
      rows.forEach(function (row) {
        var sel = row.querySelector('select'), mark = row.querySelector('.m-mark');
        var ok = sel.value === row.dataset.answer;
        if (ok) right++;
        mark.textContent = sel.value === '' ? '' : (ok ? ' ✓' : ' ✗');
        mark.className = 'm-mark ' + (ok ? 'ok' : 'bad');
      });
      fb.className = 'feedback ' + (right === rows.length ? 'ok' : 'bad');
      fb.textContent = right + ' / ' + rows.length + (right === rows.length ? '. All mapped correctly.' : '. Change the ✗ rows and check again.');
    });
    box.appendChild(btn); box.appendChild(fb);
  });
})();
