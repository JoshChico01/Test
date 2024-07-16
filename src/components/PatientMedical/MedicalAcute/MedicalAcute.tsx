import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { CheckboxNeutral } from '../CheckboxNeutral/CheckboxNeutral.js';
import { RadioActiveFlagged } from '../RadioActiveFlagged/RadioActiveFlagged.js';
import { RadioNeutralNo } from '../RadioNeutralNo/RadioNeutralNo.js';
import { RadioNeutralNoFlag } from '../RadioNeutralNoFlag/RadioNeutralNoFlag.js';
import { RadioNeutralYes } from '../RadioNeutralYes/RadioNeutralYes.js';
import { RadioNeutralYesFlag } from '../RadioNeutralYesFlag/RadioNeutralYesFlag.js';
import { YesNoQ } from '../YesNoQ/YesNoQ.js';
import classes from './MedicalAcute.module.css';
import { RadioIcon } from './RadioIcon.js';

interface Props {
  className?: string;
  hide?: {
    radioNeutralYesFlag?: boolean;
    radioNeutralNo?: boolean;
    radioNeutralYes?: boolean;
    radioNeutralNoFlag?: boolean;
    flagged?: boolean;
    radioNeutralYesFlag2?: boolean;
    radioNeutralNo2?: boolean;
    radioNeutralYes2?: boolean;
    radioNeutralNoFlag2?: boolean;
    radioNeutralYesFlag3?: boolean;
    radioNeutralNo3?: boolean;
    radioNeutralYes3?: boolean;
    radioNeutralNoFlag3?: boolean;
    radioNeutralYesFlag4?: boolean;
    radioNeutralNo4?: boolean;
    radioNeutralYes4?: boolean;
    radioNeutralNoFlag4?: boolean;
    radioNeutralYesFlag5?: boolean;
    radioNeutralNo5?: boolean;
    radioNeutralYes5?: boolean;
    radioNeutralNoFlag5?: boolean;
    flagged2?: boolean;
  };
  text?: {
    amount?: ReactNode;
    amount2?: ReactNode;
  };
}
/* @figmaId 689:6561 */
export const MedicalAcute: FC<Props> = memo(function MedicalAcute(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle98}></div>
      <div className={classes.acuteAndModifiableConditions}>Acute and Modifiable Conditions</div>
      <div className={classes.frame28}>
        <YesNoQ
          className={classes.yesNoQ}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag, radioNeutralNo2: classes.radioNeutralNo }}
          hide={{
            radioNeutralYesFlag: false,
            radioNeutralNo: false,
            radioNeutralYes: true,
            radioNeutralNoFlag: true,
            flagged: false,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                <ol className={classes.list}>
                  <li>
                    <div className={classes.textBlock}>Acute delirium</div>
                  </li>
                </ol>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ2}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag2, radioNeutralNo2: classes.radioNeutralNo2 }}
          hide={{
            radioNeutralYesFlag: false,
            radioNeutralNo: false,
            radioNeutralYes: true,
            radioNeutralNoFlag: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte2}>
                <ol className={classes.list2}>
                  <li>
                    <div className={classes.textBlock2}>
                      Hypoxemia with oxygen saturation &lt; 90% or PO2 &lt; 60 mm Hg uncorrected with &lt; 6 liters per
                      minute oxygen supplementation by nasal cannula
                    </div>
                  </li>
                </ol>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ3}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag3, radioNeutralNo2: classes.radioNeutralNo3 }}
          hide={{
            radioNeutralYesFlag: false,
            radioNeutralNo: false,
            radioNeutralYes: true,
            radioNeutralNoFlag: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte3}>
                <ol className={classes.list3}>
                  <li>
                    <div className={classes.textBlock3}>
                      Bronchodilator (nebulizer) treatments required every 2 hours or more frequently
                    </div>
                  </li>
                </ol>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ4}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag4, radioNeutralNo2: classes.radioNeutralNo4 }}
          hide={{
            radioNeutralYesFlag: false,
            radioNeutralNo: false,
            radioNeutralYes: true,
            radioNeutralNoFlag: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte4}>
                <ol className={classes.list4}>
                  <li>
                    <div className={classes.textBlock4}>Septic shock</div>
                  </li>
                </ol>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ5}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag5, radioNeutralNo2: classes.radioNeutralNo5 }}
          hide={{
            radioNeutralYesFlag: false,
            radioNeutralNo: false,
            radioNeutralYes: true,
            radioNeutralNoFlag: true,
            flagged: props.hide?.flagged2,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte5}>
                <ol className={classes.list5}>
                  <li>
                    <div className={classes.textBlock5}>
                      Requirement for monitoring more frequent than every 2 hours
                    </div>
                  </li>
                </ol>
              </div>
            ),
            amount: props.text?.amount,
            amount2: props.text?.amount2,
          }}
        />
        <div className={classes.mCQ}>
          <div className={classes.rectangle84}></div>
          <div className={classes.frame13}>
            <div className={classes.requireAnyOfTheFollowingProced}>
              <ol className={classes.list6}>
                <li>
                  <div className={classes.textBlock6}>Require any of the following procedures:</div>
                </li>
              </ol>
            </div>
            <CheckboxNeutral
              className={classes.checkboxNeutral}
              text={{
                amount: <div className={classes.amount}>computed tomography</div>,
              }}
            />
            <CheckboxNeutral
              className={classes.checkboxNeutral2}
              text={{
                amount: <div className={classes.amount2}>magnetic resonance imaging</div>,
              }}
            />
            <CheckboxNeutral
              className={classes.checkboxNeutral3}
              text={{
                amount: <div className={classes.amount3}>endoscopic procedure</div>,
              }}
            />
            <CheckboxNeutral
              className={classes.checkboxNeutral4}
              text={{
                amount: <div className={classes.amount4}>blood transfusion</div>,
              }}
            />
            <CheckboxNeutral
              className={classes.checkboxNeutral5}
              text={{
                amount: <div className={classes.amount5}>cardiac stress test</div>,
              }}
            />
            <CheckboxNeutral
              className={classes.checkboxNeutral6}
              text={{
                amount: <div className={classes.amount6}>surgery</div>,
              }}
            />
          </div>
          <div className={classes.frame23}>
            <RadioNeutralYesFlag className={classes.radioNeutralYesFlag6} />
            <RadioNeutralNo className={classes.radioNeutralNo6} />
          </div>
        </div>
      </div>
    </div>
  );
});
