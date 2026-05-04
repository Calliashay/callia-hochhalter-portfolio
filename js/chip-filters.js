const chips = document.querySelectorAll(".chip");
const cards = document.querySelectorAll(".project-card");

function setActiveChip(clicked_chip) {
  for (let i = 0; i < chips.length; i++) {
    const current_chip = chips[i];
    const is_active = (current_chip === clicked_chip);
    
    if (is_active) {
      current_chip.classList.add("is-active");
    } else {
      current_chip.classList.remove("is-active");
    }
  }
}

function applyFilter(filter_value) {
  for (let i = 0; i < cards.length; i++) {
    const current_card = cards[i];
    const li = current_card.closest("li");

    if (li) {
      if (filter_value === "all") {
        li.hidden = false;
      } else {
        const card_category = current_card.dataset.category;
        li.hidden = (card_category !== filter_value);
      }
    }
  }
}

function onChipClicked(event) {
  const clicked_chip = event.currentTarget;
  const filter_value = clicked_chip.dataset.filter;
  
  setActiveChip(clicked_chip);
  applyFilter(filter_value);
}

for (let i = 0; i < chips.length; i++) {
  chips[i].addEventListener("click", onChipClicked);
}