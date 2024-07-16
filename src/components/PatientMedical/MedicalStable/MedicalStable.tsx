import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { CheckboxNeutral } from '../CheckboxNeutral/CheckboxNeutral.js';
import { RadioActiveFlagged } from '../RadioActiveFlagged/RadioActiveFlagged.js';
import { RadioNeutralNo } from '../RadioNeutralNo/RadioNeutralNo.js';
import { RadioNeutralNoFlag } from '../RadioNeutralNoFlag/RadioNeutralNoFlag.js';
import { RadioNeutralYes } from '../RadioNeutralYes/RadioNeutralYes.js';
import { RadioNeutralYesFlag } from '../RadioNeutralYesFlag/RadioNeutralYesFlag.js';
import { YesNoQ } from '../YesNoQ/YesNoQ.js';
import classes from './MedicalStable.module.css';

interface Props {
  className?: string;
  hide?: {
    radioNeutralYesFlag?: boolean;
    radioNeutralNo?: boolean;
    radioNeutralYes?: boolean;
    radioNeutralNoFlag?: boolean;
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
    flagged?: boolean;
    radioNeutralYesFlag5?: boolean;
    radioNeutralNo5?: boolean;
    radioNeutralYes5?: boolean;
    radioNeutralNoFlag5?: boolean;
    radioNeutralYesFlag6?: boolean;
    radioNeutralNo6?: boolean;
    radioNeutralYes6?: boolean;
    radioNeutralNoFlag6?: boolean;
    radioNeutralYesFlag7?: boolean;
    radioNeutralNo7?: boolean;
    radioNeutralYes7?: boolean;
    radioNeutralNoFlag7?: boolean;
  };
}
/* @figmaId 689:6610 */
export const MedicalStable: FC<Props> = memo(function MedicalStable(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle98}></div>
      <div className={classes.stableChronicConditions}>Stable/ Chronic Conditions</div>
      <div className={classes.frame29}>
        <YesNoQ
          className={classes.yesNoQ}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag, radioNeutralNo2: classes.radioNeutralNo }}
          hide={{
            radioNeutralYesFlag: false,
            radioNeutralNo: false,
            radioNeutralYes: true,
            radioNeutralNoFlag: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                <ol className={classes.list}>
                  <li>
                    <div className={classes.textBlock}>COPD with unstable severe cardiac comorbidities</div>
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
                    <div className={classes.textBlock2}>Arterial blood gas measurements required</div>
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
                    <div className={classes.textBlock3}>Required cardiac monitoring or intensive care</div>
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
            flagged: false,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte4}>
                <ol className={classes.list4}>
                  <li>
                    <div className={classes.textBlock4}>Need for mechanical ventilation</div>
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
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte5}>
                <ol className={classes.list5}>
                  <li>
                    <div className={classes.textBlock5}>On methadone requiring daily pickup of medication</div>
                  </li>
                </ol>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ6}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag6, radioNeutralNo2: classes.radioNeutralNo6 }}
          hide={{
            radioNeutralYesFlag: false,
            radioNeutralNo: false,
            radioNeutralYes: true,
            radioNeutralNoFlag: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte6}>
                <ol className={classes.list6}>
                  <li>
                    <div className={classes.textBlock6}>Active drug abuse</div>
                  </li>
                </ol>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ7}
          classes={{ radioNeutralYesFlag: classes.radioNeutralYesFlag7, radioNeutralNo2: classes.radioNeutralNo7 }}
          hide={{
            radioNeutralYesFlag: false,
            radioNeutralNo: false,
            radioNeutralYes: true,
            radioNeutralNoFlag: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte7}>
                <ol className={classes.list7}>
                  <li>
                    <div className={classes.textBlock7}>Active drug abuse</div>
                  </li>
                </ol>
              </div>
            ),
          }}
        />
        <div className={classes.mCQ}>
          <div className={classes.rectangle84}></div>
          <div className={classes.frame13}>
            <div className={classes.secondaryCondition}>
              <ol className={classes.list8}>
                <li>
                  <div className={classes.textBlock8}>Secondary condition</div>
                </li>
              </ol>
            </div>
            <CheckboxNeutral
              className={classes.checkboxNeutral}
              text={{
                amount: <div className={classes.amount}>active nonmelanoma</div>,
              }}
            />
            <CheckboxNeutral
              className={classes.checkboxNeutral2}
              text={{
                amount: <div className={classes.amount2}>prostate cancer</div>,
              }}
            />
            <CheckboxNeutral
              className={classes.checkboxNeutral3}
              text={{
                amount: <div className={classes.amount3}>end-stage renal disease</div>,
              }}
            />
            <CheckboxNeutral
              className={classes.checkboxNeutral4}
              text={{
                amount: <div className={classes.amount4}>acute myocardial infarction</div>,
              }}
            />
            <CheckboxNeutral
              className={classes.checkboxNeutral5}
              text={{
                amount: <div className={classes.amount5}>acute cerebral vascular accident</div>,
              }}
            />
            <CheckboxNeutral
              className={classes.checkboxNeutral6}
              text={{
                amount: <div className={classes.amount6}>acute hemorrhage</div>,
              }}
            />
          </div>
          <div className={classes.frame21}>
            <RadioNeutralYesFlag className={classes.radioNeutralYesFlag8} />
            <RadioNeutralNo className={classes.radioNeutralNo8} />
          </div>
        </div>
        <div className={classes.mCQ2}>
          <div className={classes.rectangle842}></div>
          <div className={classes.frame132}>
            <div className={classes.severeImmunosuppressionNotAuto}>
              <ol className={classes.list9}>
                <li>
                  <div className={classes.textBlock9}>
                    Severe immunosuppression (not auto reject, need to be discussed with the medical team)
                  </div>
                </li>
              </ol>
            </div>
            <CheckboxNeutral
              className={classes.checkboxNeutral7}
              text={{
                amount: <div className={classes.amount7}>AIDS</div>,
              }}
            />
            <CheckboxNeutral
              className={classes.checkboxNeutral8}
              text={{
                amount: <div className={classes.amount8}>neutropenia</div>,
              }}
            />
            <CheckboxNeutral
              className={classes.checkboxNeutral9}
              text={{
                amount: <div className={classes.amount9}>organ transplant with immunosuppressive therapy</div>,
              }}
            />
            <CheckboxNeutral
              className={classes.checkboxNeutral10}
              text={{
                amount: <div className={classes.amount10}>chemotherapy or cytotoxic drug use</div>,
              }}
            />
            <CheckboxNeutral
              className={classes.checkboxNeutral11}
              text={{
                amount: <div className={classes.amount11}>multiple myeloma</div>,
              }}
            />
            <CheckboxNeutral
              className={classes.checkboxNeutral12}
              text={{
                amount: <div className={classes.amount12}>lymphoma</div>,
              }}
            />
          </div>
          <div className={classes.frame22}>
            <RadioNeutralYesFlag className={classes.radioNeutralYesFlag9} />
            <RadioNeutralNo className={classes.radioNeutralNo9} />
          </div>
        </div>
      </div>
    </div>
  );
});
