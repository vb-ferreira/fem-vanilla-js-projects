// 1
const p = document.querySelector('#time');

const updateTime = () => {
  // 2
  const today = new Date();
  const currentTime = today.toLocaleTimeString();
  // 4
  const randomTop = Math.random() * 100;
  const randomLeft = Math.random() * 100;
  const [s, l] = ["75%", "75%"];  // valores fixos para saturation & lightness
  const h = Math.random() * 360;  // e variável para o hue
  p.setAttribute('style', `top: ${randomTop}%; left: ${randomLeft}%; color: hsl(${h}, ${s}, ${l})`);
  // 3
  p.innerText = currentTime;
}

updateTime();  // para exibir o tempo imediatamente, sem esperar 3s

// 5
setInterval(updateTime, 3000);