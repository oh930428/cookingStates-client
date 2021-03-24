import React, { useState, useEffect } from 'react';
import './CSS/myinfo.css';
import { withRouter, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfo } from '../actions/user_action';
import axios from 'axios';
import API from '../api';

function Myinfo(props) {
  const UserData = props.location.state.UserData;
  const [userPw, setUpdatePw] = useState(UserData.password);
  const [userPwChk, setUpdatePwChk] = useState('');
  const [pwErr, setPwErr] = useState(false);
  const [userBio, setUpdateBio] = useState(UserData.bio);
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.userReducer.accessToken);

  // 수정 완료 버튼을 누를 때 userInfo update
  const handleClick = () => {
    axios.post(
      'http://localhost:4000/user/update',
      {
        email: UserData.email,
        password: userPw,
        bio: userBio,
      },
      { withCredentials: true, headers: { authorization: accessToken } }
    );
  };

  const onPwUpdateHandler = (e) => {
    setUpdatePw(e.target.value);
  };
  const onPwChkUpdateHandler = (e) => {
    setPwErr(e.target.value !== userPw);
    setUpdatePwChk(e.target.value);
  };

  const onTextareaUpdateHandler = (e) => {
    setUpdateBio(e.target.value);
  };

  return (
    <div className="myinfo">
      <div className="myinfo-form">
        <h1>My Info</h1>
        <form className="myinfoform">
          <label className="username">
            Username :
            <input type="text" disabled value={UserData.userName} />
          </label>
          <label className="email">
            Email :
            <input type="email" disabled value={UserData.email} />
          </label>
          <label className="pw">
            Password :
            <input
              id="userpw"
              type="password"
              onChange={onPwUpdateHandler}
              defaultValue={UserData.password}
              readOnly
            />
          </label>
          <label className="pw-confirm">
            Comfirm Password :
            <input
              id="userpwchk"
              type="password"
              onChange={onPwChkUpdateHandler}
              readOnly
            />
            {pwErr && (
              <div className="pwchk">
                비밀번호가 일치 하지 않습니다 다시 입력해주세요
              </div>
            )}
          </label>
          <label className="bio">Bio :</label>
          <textarea
            className="bio-textarea"
            onChange={onTextareaUpdateHandler}
            defaultvalue={UserData.bio}
            readOnly
          >
            {UserData.bio}
          </textarea>
        </form>
        <div className="myinfo-btn">
          <button
            className="btn-myKitchen"
            onClick={() => {
              props.history.goBack();
            }}
          >
            My Kitchen
          </button>
          <button
            className="myinfo-update"
            onClick={() => {
              const inputPw = document.querySelector('#userpw');
              const inputPwchk = document.querySelector('#userpwchk');
              const textareaBio = document.querySelector('.bio-textarea');
              const myinfoUpdateBtn = document.querySelector('.myinfo-update');

              if (inputPw.hasAttribute('readOnly')) {
                myinfoUpdateBtn.textContent = '프로필 수정완료';
                inputPw.removeAttribute('readOnly');
                inputPwchk.removeAttribute('readOnly');
                textareaBio.removeAttribute('readOnly');
              } else {
                myinfoUpdateBtn.textContent = '프로필 수정하기';
                inputPw.setAttribute('readOnly', '');
                inputPwchk.setAttribute('readOnly', '');
                textareaBio.setAttribute('readOnly', '');
                inputPw.value = '';
                inputPwchk.value = '';
                textareaBio.value = '';
                handleClick();
                props.history.push('/mykitchen');
              }
            }}
          >
            프로필 수정하기
          </button>
          <Link to="/unregister">
            <button className="btn-delete-account">회원탈퇴</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Myinfo);
