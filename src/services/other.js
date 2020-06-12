
import humanizeDuration from 'humanize-duration'

export const humanize = (time) => humanizeDuration(new Date().getTime() - time, { delimiter: ' and ', largest: 1, maxDecimalPoints: 0 })