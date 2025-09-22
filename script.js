/* -------- Part 2: reusable function with parameter & return -------- */
function addClassTimed(element, className, duration = 600) {
  // element: DOM node  (parameter)
  // className: string  (parameter)
  // duration: number   (parameter with default)
  // return: Promise    (so caller can await completion)
  return new Promise(resolve => {
    element.classList.add(className);
    setTimeout(() => {
      element.classList.remove(className);
      resolve(); // return completion signal
    }, duration);
  });
}

/* -------- Part 3: wiring events -------- */
const lifeBtn = document.getElementById('lifeBtn');
const box     = document.getElementById('box');
const card    = document.getElementById('card');

lifeBtn.addEventListener('click', async () => {
  // local scope: btn clicked
  await addClassTimed(box, 'animate'); // reuse function
  console.log('Animation finished – promise returned');
});

card.addEventListener('click', () => {
  // toggle flip class (local scope)
  card.classList.toggle('flip');
});