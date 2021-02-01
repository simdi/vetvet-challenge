import React, { useState } from 'react';

import Button from '../../Form/Button/Button';

export default function Pill(props) {
  const { pill, showClearBtn, children } = props;
  const [showOption, setShowOption] = useState(false);

  return (
    <div className={`pillContainer`}>
      <div className={`pill ${showOption && 'active'}`} onClick={() => setShowOption(!showOption)} onBlur={() => setShowOption(false)}>
        { pill }
      </div>
      {
        showOption && <div className={`pillOption`}>
          <section className={`pillOptionContent`}>
            { children }
          </section>
          <footer className={`pillOptionFooter`}>
            <div>
              { showClearBtn && <Button btnType='btn-transparent'>Clear</Button> }
            </div>
            <div>
              <Button btnType='btn-primary'>Apply</Button>
            </div>
          </footer>
        </div>
      }
    </div>
  )
}
