let position = 0;

        const nextPhoto = function () {
            const imageSlider1 = document.getElementById('imageSlider1');

            position -= 100

            imageSlider1.style.transform = `translateX(${position}%)`;
        }
        
        const prevPhoto = function () {
            const imageSlider1 = document.getElementById('imageSlider1');

            position += 100

            imageSlider1.style.transform = `translateX(${position}%)`;
        }