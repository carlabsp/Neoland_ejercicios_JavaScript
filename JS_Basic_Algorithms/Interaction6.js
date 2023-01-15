//6.1 bucles (for)
for (let i = 1; i <= 9; i++) {
  console.log(i);
} 

//6.2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number in numbers){
  if (number %2 == 0) 
    console.log(number);
  
} 

//6.3
for (let i = 0; i <= 10; i++) {
  if (i / 2 == 0) {
      console.log(i);
  }}

  
for (let i = 1; i <= 10; i++){
if (i < 10){
  console.log("Intentando dormir 🐑");
} else {
  console.log("Dormido");
}
} 