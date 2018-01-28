/* global CONVARGO*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const template = actors.map(actor => {
      return `
        <ul class="list-inline">
          <li class="list-inline-item">The ${actor.who} </li>
          <li class="list-inline-item">${actor.type} : </li>
          <li class="list-inline-item"> ${Math.round(1000 * actor.amount) / 1000} </li>
        </ul>
</BR>
      `;
    }).join('');

    div.innerHTML = template;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    const trucker = CONVARGO.getTrucker();
    const distance = document.querySelector('.distance').value;
    const volume = document.querySelector('.volume').value;
    const option = document.querySelector('.option').checked;
    const actors = CONVARGO.payActors(trucker, distance, volume, option);

    render(actors);

    return;
  });
})();

