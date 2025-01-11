let sectors = document.querySelectorAll(".sector");

let options = document.querySelectorAll(".option");

const totalSectors = sectors.length;
const skewVal = 360 / totalSectors - 90;

var deviation = 0;
if ((totalSectors / 2) % 2 != 0) {
    deviation = 360 / totalSectors / 2;
}

sectors.forEach((sector, index) => {
    const angle = (360 / totalSectors) * (index + 1) - deviation;

    let optionAngle =
        angle + Math.abs(skewVal) + (90 - Math.abs(skewVal)) / 2;
    options[
        index
    ].style.transform = `rotateZ(${optionAngle}deg) translateY(-140px) rotate(-${optionAngle}deg)`;
    sector.style.transform = `rotate(${angle}deg) skew(${skewVal}deg)`;
});