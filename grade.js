var result = 81;

if (result < 0 || result > 100) {
  console.log("invalid result");
} else if (result < 40) {
  console.log("tumi Fail koira geso (F grade)");
} else if (result < 50) {
  console.log("tumi C grade paico");
} else if (result < 60) {
  console.log("tumi B grade paico");
} else if (result < 70) {
  console.log("tumi A- grade paico");
} else if (result < 80) {
  console.log("tumi A grade paico");
} else {
  console.log("tumi A+ grade paico");
}