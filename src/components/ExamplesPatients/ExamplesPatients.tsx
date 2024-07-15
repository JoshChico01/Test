import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BackIcon } from './BackIcon.js';
import classes from './ExamplesPatients.module.css';
import { ForwardIcon } from './ForwardIcon.js';
import { Icon2 } from './Icon2.js';
import { Icon3 } from './Icon3.js';
import { Icon4 } from './Icon4.js';
import { Icon } from './Icon.js';
import { LockIcon } from './LockIcon.js';
import { MoreIcon } from './MoreIcon.js';
import { NavigationRail_AlignmentTop } from './NavigationRail_AlignmentTop/NavigationRail_AlignmentTop.js';
import { RefreshIcon } from './RefreshIcon.js';
import { StarIcon } from './StarIcon.js';
import { Stars } from './Stars/Stars.js';

interface Props {
  className?: string;
  hide?: {
    fABElevationOverride?: boolean;
  };
}
/* @figmaId 872:5086 */
export const ExamplesPatients: FC<Props> = memo(function ExamplesPatients(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.content}>
        <div className={classes.frame32}>
          <div className={classes.mainContent}>Main content</div>
        </div>
      </div>
      <NavigationRail_AlignmentTop
        className={classes.navigationRail}
        swap={{
          icon: (
            <Stars
              swap={{
                icon: <Icon className={classes.icon} />,
              }}
            />
          ),
          icon2: (
            <Stars
              swap={{
                icon: <Icon2 className={classes.icon2} />,
              }}
            />
          ),
          icon3: (
            <Stars
              swap={{
                icon: <Icon3 className={classes.icon3} />,
              }}
            />
          ),
          icon4: (
            <Stars
              swap={{
                icon: <Icon4 className={classes.icon4} />,
              }}
            />
          ),
        }}
        hide={{
          fABElevationOverride: true,
        }}
        text={{
          label: <div className={classes.patients}>Patients</div>,
          label2: <div className={classes.label}>Decision Tree</div>,
          label3: <div className={classes.label2}>Label</div>,
          label4: <div className={classes.label3}>Label</div>,
        }}
      />
      <div className={classes.chromeBrowserBar}>
        <div className={classes.icons}>
          <div className={classes.back}>
            <BackIcon className={classes.icon5} />
          </div>
          <div className={classes.forward}>
            <ForwardIcon className={classes.icon6} />
          </div>
          <div className={classes.refresh}>
            <RefreshIcon className={classes.icon7} />
          </div>
        </div>
        <div className={classes.addressBar}>
          <div className={classes.uRL}>
            <div className={classes.lock}>
              <LockIcon className={classes.icon8} />
            </div>
            <div className={classes.text}>www.url.com</div>
          </div>
          <div className={classes.star}>
            <StarIcon className={classes.icon9} />
          </div>
        </div>
        <div className={classes.avatar}>
          <div className={classes.m}>M</div>
        </div>
        <div className={classes.more}>
          <MoreIcon className={classes.icon10} />
        </div>
      </div>
    </div>
  );
});
