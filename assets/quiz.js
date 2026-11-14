/* Reusable multiple-choice quiz.
   Markup:
   <div class="exercise quiz">
     <div class="q" data-answer="2">
       <p class="q-stem">Question?</p>
       <div class="q-opts"><button class="opt">A</button>…</div>
       <p class="why">Explanation shown after answering.</p>
     </div>
     …
   </div>
   First click counts toward the score; the learner can keep clicking to explore. */
(function () {
  document.querySelectorAll('.quiz').forEach(function (quiz) {
    var qs = quiz.querySelectorAll('.q');
    var answered = 0, right = 0;
    var score = document.createElement('p');
    score.className = 'score';
    quiz.appendChild(score);

    qs.forEach(function (q) {
      var correct = parseInt(q.dataset.answer, 10);
      var opts = q.querySelectorAll('.opt');
      var first = true;
      opts.forEach(function (opt, i) {
        opt.type = 'button';
        opt.addEventListener('click', function () {
          if (i === correct) {
            opt.classList.add('correct');
            opts.forEach(function (o) { o.disabled = true; });
          } else {
            opt.classList.add('wrong');
            opt.disabled = true;
          }
          q.querySelector('.why') && q.querySelector('.why').classList.add('show');
          if (first) {
            first = false; answered++;
            if (i === correct) right++;
            score.textContent = 'First-try score: ' + right + ' / ' + qs.length +
              (answered === qs.length ? (right === qs.length ? '. Clean sweep.' :
                '. Re-read the explanations for the ones you missed, then come back tomorrow and retry.') : '');
          }
        });
      });
    });
  });
})();
