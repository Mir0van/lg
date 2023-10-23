const scrollToTopButton = document.querySelector('[data-burger]');

const scrollToTop = () => {
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
    });
  });
};

export {scrollToTop};
