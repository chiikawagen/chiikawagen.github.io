Object.assign(String.prototype, {
  toChiikawa() {
    return this + '...ってコト！？';
  },
});
document.getElementById('header').textContent = '入力しろ...ってコト！？';
const form = document.getElementById('str');
form.addEventListener('input', () => {
  document.getElementById('header').textContent = form.value.toChiikawa();
});
