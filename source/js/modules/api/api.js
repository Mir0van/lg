const text = document.querySelector('[data-api-description]');
const url = 'https://baconipsum.com/api/?type=lucky';

const renderText = (data) => {
  if (!data) {
    text.classList.remove('visually-hidden');
    return;
  }

  const size = data.length;
  const randomNumber = Math.floor(Math.random() * (size));
  text.textContent = data[randomNumber];
  text.classList.remove('visually-hidden');
};

const getData = () => {
  fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error();
        } else {
          return res.json();
        }
      })
      .then((data) => {
        renderText(data);
      })
      .catch((error) => {
        text.classList.remove('visually-hidden');

        // eslint-disable-next-line no-console
        console.error(error);
      });
};

export {getData};
