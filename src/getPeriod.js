/**
 * Find whether string S is periodic. 
 * Periodic indicates S = nP. 
 * e.g. 
 * S = "ababab", then n = 3, and P = "ab" 
 * S = "xxxxxx", then n = 6, and P = "x" 
 * S = "aabbaaabba", then n = 2, and P = "aabba" 
 * @param  {string} string
 * @returns {Object} object that contains n and p
 */
exports.getPeriod = (string) => {
  let half = Math.ceil(string.length / 2);
  for (let i = 1; i <= half; i++) {
    if ((string.length % i) === 0) {
      let period = string.slice(0, i);
      let periodTimesInString = string.length / period.length;
      let matchedPeriodInSubstrings = 0;
      for(let i = 0; i < periodTimesInString && string.substr(i * period.length, period.length) === period; i++) {
        matchedPeriodInSubstrings++;
      }
      if(matchedPeriodInSubstrings === periodTimesInString) {
        return {
          'n': matchedPeriodInSubstrings,
          'P': period
        }
      }
    }
  }
  return {
    'n': 0,
    'P': ''
  };
}