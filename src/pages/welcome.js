import './CSS/welcome.css';

import React from 'react';

function Welcome(props) {
  return (
    <div className="welcome">
      <div className="container">
        <div className="welcome-header">
          <div className="welcome-header-title">WELCOME!</div>
          <div className="welcome-header-desc">
            쿠킹 스테이츠에서 최고의 쉐프로 성장하세요!
          </div>
        </div>
        <div className="welcome-contents">
          {/* username === 로그인한 유저이름 */}
          <div className="welcome-contents-level1">
            <span className="welcome-username">
              username 쉐프님의 요리 레벨은
              <span className="level1">Lv1.</span>
              입니다.
            </span>
          </div>
          {/* <div className="welcome-contents-level2">
            <span className="welcome-username">
              username 쉐프님의 요리 레벨은
              <span className="level2">Lv2.</span>
              입니다.
            </span>
          </div> */}
          {/* <div className="welcome-contents-level3">
            <span className="welcome-username">
              username 쉐프님의 요리 레벨은
              <span className="level3">Lv3.</span>
              입니다.
            </span>
          </div> */}
        </div>
        <div className="welcome-footer">
          <div className="welcome-footer-content">
            ...초 뒤 메인 페이지로 이동합니다
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
