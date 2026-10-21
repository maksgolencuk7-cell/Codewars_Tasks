function whatCentury(year)
{
  let centuryNum = Math.ceil(Number(year) / 100);
    let lastTwoDigits = centuryNum % 100;
    let lastDigit = centuryNum % 10;
    let suffix = 'th';

    if (lastTwoDigits < 11 || lastTwoDigits > 13) {
        if (lastDigit === 1) suffix = 'st';
        else if (lastDigit === 2) suffix = 'nd';
        else if (lastDigit === 3) suffix = 'rd';
    }

    return centuryNum + suffix;
}
