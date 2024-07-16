import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { RadioActiveFlagged } from '../RadioActiveFlagged/RadioActiveFlagged.js';
import { RadioNeutralNo } from '../RadioNeutralNo/RadioNeutralNo.js';
import { RadioNeutralNoFlag } from '../RadioNeutralNoFlag/RadioNeutralNoFlag.js';
import { RadioNeutralYes } from '../RadioNeutralYes/RadioNeutralYes.js';
import { RadioNeutralYesFlag } from '../RadioNeutralYesFlag/RadioNeutralYesFlag.js';
import classes from './Comments.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    flagged?: boolean;
  };
  text?: {
    loremIpsumDolorSitAmetConsecte?: ReactNode;
  };
}
/* @figmaId 650:1635 */
export const Comments: FC<Props> = memo(function Comments(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle84}></div>
      <div className={classes.frame19}>
        <RadioNeutralYesFlag className={classes.radioNeutralYesFlag} />
        <RadioNeutralNo className={classes.radioNeutralNo} />
      </div>
      {props.hide?.flagged && (
        <div>
          <div className={classes.rectangle195}></div>
          <div className={classes.rectangle98}></div>
          <div className={classes.frame31}>
            <RadioNeutralNo className={classes.radioNeutralNo2} />
            <RadioActiveFlagged className={classes.radioActiveFlagged} />
          </div>
        </div>
      )}
      
      <div className={classes.frame13}>
        <div className={classes.rectangle196}></div>
        <div className={classes.clickToInsertText}>Click to insert text</div>
        {props.text?.loremIpsumDolorSitAmetConsecte != null ? (
          props.text?.loremIpsumDolorSitAmetConsecte
        ) : (
          <div className={classes.loremIpsumDolorSitAmetConsecte}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        )}
      </div>
    </div>
  );
});
