document.querySelector('.button').addEventListener('click', function() {
  document.querySelector('.new-section').scrollIntoView({ behavior: 'smooth' });
});

function togglePC() {
    document.getElementById('pc-content').classList.toggle('open');
    document.getElementById('arrow').classList.toggle('open');
}

