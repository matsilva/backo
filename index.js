
/**
 * @typedef {Object} BackoffOptions
 * @property {number} min - Initial timeout in milliseconds [100]
 * @property {number} max - Max timeout [10000]
 * @property {number} factor - Exponential factor [2]
 * @property {number} jitter - Jitter factor [0]
 */

export class Backoff {
  constructor(opts = {}) {
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
  }

  /**
   * Return the backoff duration.
   *
   * @return {Number}
   * @api public
   */
  duration() {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var rand = Math.random();
      var deviation = Math.floor(rand * this.jitter * ms);
      ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
  }

  /**
   * Reset the number of attempts.
   *
   * @api public
   */
  reset() {
    this.attempts = 0;
  }
}
