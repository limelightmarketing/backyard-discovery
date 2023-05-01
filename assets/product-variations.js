let options = document.querySelectorAll('.product-template__variation-radio-option');

function triggerChange() {
    let form = document.querySelector('select.single-option-selector');

    form.dispatchEvent(new Event('change'));
}

function activateOption(el, data) {
    let select = document.querySelector('select.single-option-selector');
    let options = select.options;

    el.classList.add('variation-radio__circle--selected');
    for (let option, j = 0; option = options[j]; j++) {
        if (option.value == data) {
            select.selectedIndex = j;
            break;
        }
    }
}

function deactivateOption(el) {
    if (el !== null) {
        el.classList.remove('variation-radio__circle--selected');
    }
}

for (let i = 0; i < options.length; i++) {
    let data = options[i].dataset.option;

    options[i].addEventListener('click', () => {
        deactivateOption(document.querySelector('.variation-radio__circle--selected'))
        activateOption(options[i], data);
        triggerChange();
    })
}

function setSelectedVariant() {
    let select = document.querySelector('.single-option-selector')
    
    if (select) {
      let selectedVariation = select.options[select.selectedIndex].value;
      let variationRadios = document.querySelectorAll('.product-template__variation-radio-option');

      if (variationRadios) {
        variationRadios.forEach(radio => {
            if (radio.dataset.option == selectedVariation) {
                radio.classList.add('variation-radio__circle--selected');
            }
        })
      }
    }
}

setSelectedVariant();
