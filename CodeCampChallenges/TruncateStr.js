// function truncateString(str, num) {
//   let newString = "";
//   if (str.length > num) {
//     let short = str.split(",").slice(0,9).join(",");
//   }
//   return short
// }



function truncateString(str, num) {
  let newString = "";
  if (str.length > num) {
    let short = str.split("").slice(0,9).join("");
    newString += short + "...";
  } else {
    newString = str;
  }
  return newString;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));