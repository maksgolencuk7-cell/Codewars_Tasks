function whatCentury(year)
{
let century = Math.ceil(year / 100);
  let lastTwo = century % 100;
  let lastOne = century % 10;

  let suffix = "th";
  
  if (lastTwo < 11 || lastTwo > 13) {
    if (lastOne === 1) suffix = "st";
    if (lastOne === 2) suffix = "nd";
    if (lastOne === 3) suffix = "rd";
  }

  return century + suffix;
}
