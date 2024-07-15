import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { RadioActiveFlagged } from '../RadioActiveFlagged/RadioActiveFlagged.js';
import { RadioNeutralNo } from '../RadioNeutralNo/RadioNeutralNo.js';
import { RadioNeutralNoFlag } from '../RadioNeutralNoFlag/RadioNeutralNoFlag.js';
import { RadioNeutralYes } from '../RadioNeutralYes/RadioNeutralYes.js';
import { RadioNeutralYesFlag } from '../RadioNeutralYesFlag/RadioNeutralYesFlag.js';
import classes from './YesNoQ.module.css';

interface Props {
  className?: string;
  classes?: {
    radioNeutralYesFlag?: string;
    radioNeutralNo2?: string;
    root?: string;
  };
  hide?: {
    radioNeutralYesFlag?: boolean;
    radioNeutralNo?: boolean;
    radioNeutralYes?: boolean;
    radioNeutralNoFlag?: boolean;
    flagged?: boolean;
  };
  text?: {
    loremIpsumDolorSitAmetConsecte?: ReactNode;
  };
}
/* @figmaId 638:2054 */
export const YesNoQ: FC<Props> = memo(function YesNoQ(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle84}></div>
      <div className={classes.frame13}>
        {props.hide?.radioNeutralYesFlag === false && (
          <RadioNeutralYesFlag className={props.classes?.radioNeutralYesFlag || ''} />
        )}
        {props.hide?.radioNeutralNo === false && <RadioNeutralNo className={props.classes?.radioNeutralNo2 || ''} />}
        {!props.hide?.radioNeutralYes && <RadioNeutralYes className={classes.radioNeutralYes} />}
        {!props.hide?.radioNeutralNoFlag && <RadioNeutralNoFlag className={classes.radioNeutralNoFlag} />}
      </div>
      <div className={classes.rectangle195}></div>
      <div className={classes.rectangle98}></div>
      <div className={classes.frame30}>
        <RadioActiveFlagged className={classes.radioActiveFlagged} />
        <RadioNeutralNo className={classes.radioNeutralNo} />
      </div>
      {props.text?.loremIpsumDolorSitAmetConsecte != null ? (
        props.text?.loremIpsumDolorSitAmetConsecte
      ) : (
        <div className={classes.loremIpsumDolorSitAmetConsecte}>
          <ol className={classes.list}>
            <li>
              <div className={classes.textBlock}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc,
                adipiscing vitae. Ultricies suspendisse vestibulum.
              </div>
            </li>
          </ol>
        </div>
      )}
    </div>
  );
});
