import isCodeOf from 'helpers/isCodeOf';
import keys from 'consts/keys';
import { getCode } from 'lib/reco/utils/event';

export default function isEscape(e) {
  return isCodeOf(getCode(e), keys.ESCAPE);
}
