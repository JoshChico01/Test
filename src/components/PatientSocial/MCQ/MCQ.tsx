import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { CheckboxNeutral } from '../CheckboxNeutral/CheckboxNeutral.js';
import { RadioActiveFlagged } from '../RadioActiveFlagged/RadioActiveFlagged.js';
import { RadioNeutralNo } from '../RadioNeutralNo/RadioNeutralNo.js';
import { RadioNeutralNoFlag } from '../RadioNeutralNoFlag/RadioNeutralNoFlag.js';
import { RadioNeutralYes } from '../RadioNeutralYes/RadioNeutralYes.js';
import { RadioNeutralYesFlag } from '../RadioNeutralYesFlag/RadioNeutralYesFlag.js';
import classes from './MCQ.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    checkboxNeutral?: boolean;
  };
  text?: {
    amount?: ReactNode;
    amount2?: ReactNode;
    amount3?: ReactNode;
    amount4?: ReactNode;
    loremIpsumDolorSitAmetConsecte?: ReactNode;
  };
}
/* @figmaId 640:1380 */
export const MCQ: FC<Props> = memo(function MCQ(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle84}></div>
      <div className={classes.frame18}>
        <RadioNeutralYesFlag className={classes.radioNeutralYesFlag} />
        <RadioNeutralNo className={classes.radioNeutralNo} />
      </div>
      <div className={classes.frame13}>
        <CheckboxNeutral
          className={classes.checkboxNeutral}
          text={{
            amount: props.text?.amount,
          }}
        />
        <CheckboxNeutral
          className={classes.checkboxNeutral2}
          text={{
            amount: props.text?.amount2,
          }}
        />
        <CheckboxNeutral
          className={classes.checkboxNeutral3}
          text={{
            amount: props.text?.amount3,
          }}
        />
        {!props.hide?.checkboxNeutral && (
          <CheckboxNeutral
            className={classes.checkboxNeutral4}
            text={{
              amount: props.text?.amount4,
            }}
          />
        )}
        {props.text?.loremIpsumDolorSitAmetConsecte != null ? (
          props.text?.loremIpsumDolorSitAmetConsecte
        ) : (
          <div className={classes.loremIpsumDolorSitAmetConsecte}>
            <ol className={classes.list}>
              <li>
                <div className={classes.textBlock}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
});
