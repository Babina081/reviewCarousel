let rev = 0;
carousel(rev);

function prevReview() {
  rev--;
  carousel(rev);
}

function nextReview() {
  rev++;
  carousel(rev);
}

function carousel(review) {
  let reviews = document.getElementsByClassName('reviewItems');

  if (review >= reviews.length) {
    review = 0;
    rev = 0;
  }

  if (review < 0) {
    review = reviews.length - 1;
    rev = reviews.length - 1;
  }

  for (let i = 0; i < reviews.length; i++) {
    reviews[i].style.display = 'none';
  }
  reviews[review].style.display = 'block';
}
