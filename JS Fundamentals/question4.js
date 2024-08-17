function extractGroups(pattern, str) {
  const regex = new RegExp(pattern);

  const match = regex.exec(str);

  if (match) {
    return {
      fullMatch: match[0],
      groups: match.slice(1),
    };
  } else {
    return null;
  }
}

const datePattern = "(\\d{2})-(\\d{2})-(\\d{4})";
const dateStr = "The event is on 25-12-2024.";
const dateResult = extractGroups(datePattern, dateStr);
console.log(dateResult);

const timePattern = "(\\d{2}):(\\d{2}):(\\d{2})";
const timeStr = "The current time is 14:30:45.";
const timeResult = extractGroups(timePattern, timeStr);
console.log(timeResult);

const namePattern = "(\\w+)\\s(\\w+)";
const nameStr = "John Doe";
const nameResult = extractGroups(namePattern, nameStr);
console.log(nameResult);
