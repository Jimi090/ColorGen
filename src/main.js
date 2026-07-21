import iwanthue from 'iwanthue';

let palette = iwanthue(5, {
    seed: 1,
    clustering: 'force-vector',
    quality: 50,
});

document.getElementById('generetePaletteBtn').addEventListener('click', () => {
    let seed = Math.random();
    let palette = iwanthue(5, {
        seed: seed,
        clustering: 'force-vector',
        quality: 50,
    });
    document.getElementById('color1').style.backgroundColor = palette[0];
    document.getElementById('color2').style.backgroundColor = palette[1];
    document.getElementById('color3').style.backgroundColor = palette[2];
    document.getElementById('color4').style.backgroundColor = palette[3];
    document.getElementById('color5').style.backgroundColor = palette[4];
});
/*pomyśleć czy to dobra opcja bo ta bibliteka nie robi żeby ładnie wyglądało tylko po to aby było czytelene.
Jest to duża różnica. wyszukać w necie dobrej. jak nie ma to niech chat zrobi. jak nie ma to zostaje ta*/
