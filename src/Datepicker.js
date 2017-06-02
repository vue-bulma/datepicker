// obsoleted since l10n has been moved to config object.

import Flatpickr from 'flatpickr'

export default class Datepicker extends Flatpickr {
  constructor (selector, config, l10n) {
    config.locale = Object.assign({}, Flatpickr.prototype.l10n, l10n)
    super(selector, config)
  }
}
