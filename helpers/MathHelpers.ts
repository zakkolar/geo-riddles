export function addCommas(number: String | number): String {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
