import styled from 'styled-components';

const FormComponent = () => {
    // 1. 약관에 모두 동의할 때 닫기 버튼 활성화
    // 2. 닫기 버튼 후 가입 기본약관 체크 표시
    // 3. 모든 내용 입력 및 약관 체크 표시 확인 후 로그인 버튼 활성화
  return (
    <JoinForm id="joinForm">
      <JoinBox>

        <CheckBox>
            <p>기본 약관</p>
        </CheckBox>
        <CheckBox>
          <ul className="clearfix">
            <CheckBoxText>이용약관 동의(필수)</CheckBoxText>
            <CheckBoxButton>
              <CheckboxInput type="checkbox" name="chk" />
            </CheckBoxButton>
          </ul>
          <CheckBoxTextarea readOnly>여러분을 환영합니다...</CheckBoxTextarea>
        </CheckBox>

        <CheckBox>
          <ul className="clearfix">
            <CheckBoxText>개인정보 수집 및 이용에 대한 안내(필수)</CheckBoxText>
            <CheckBoxButton>
              <CheckboxInput type="checkbox" name="chk" />
            </CheckBoxButton>
          </ul>
          <CheckBoxTextarea readOnly>여러분을 환영합니다...</CheckBoxTextarea>
        </CheckBox>

        <CheckBox>
          <ul className="clearfix">
            <CheckBoxText>위치정보 이용약관 동의(선택)</CheckBoxText>
            <CheckBoxButton>
              <CheckboxInput type="checkbox" name="chk" />
            </CheckBoxButton>
          </ul>
          <CheckBoxTextarea readOnly>여러분을 환영합니다...</CheckBoxTextarea>
        </CheckBox>

        {/* <CheckBox>
          <ul className="clearfix">
            <CheckBoxText>이벤트 등 프로모션 알림 메일 수신(선택)</CheckBoxText>
            <CheckBoxButton>
              <CheckboxInput type="checkbox" name="chk" />
            </CheckBoxButton>
          </ul>
        </CheckBox> */}
      </JoinBox>

      <FootBtWrap>
        <ButtonItem>
          <Button>비동의</Button>
        </ButtonItem>
        <ButtonItem>
          <Button agree>동의</Button>
        </ButtonItem>
      </FootBtWrap>
    </JoinForm>
  );
};

export default FormComponent;
const JoinForm = styled.form`
  width: 460px;
  margin: 0 auto;
`;

const JoinBox = styled.ul`
  border: 1px solid #ddd;
  background-color: #fff;
  list-style: none;
`;

const CheckBox = styled.li`
  position: relative;
    list-style: none;
  &:first-child {
    width: 85%;
    padding: 15px;
    font-weight: 600;
    color: #888;
  }
`;

const CheckBoxText = styled.li`
  float: left;
  font-size : 0.8em;
`;

const CheckBoxButton = styled.li`
  position: absolute;
  top: 50%;
  right: 30px;
  margin-top: -4em;
  list-style: none;
`;

const CheckboxInput = styled.input`
  margin-right: 10px;
`;

const CheckBoxTextarea = styled.textarea`
  width: 96%;
  height: 90px;
  margin: 0 2%;
  background-color: #f7f7f7;
  color: #888;
  border: none;
`;

const FootBtWrap = styled.ul`
  margin-top: 15px;
  list-style: none;
  padding: 0;
  display: flex;
`;

const ButtonItem = styled.li`
  width: 50%;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  height: 2em;
  font-size: 20px;
  text-align: center;
  font-size : 0.8em;
  border : none;
  ${({ agree }) => (agree ? `
    background-color: #5592FC;
    color: #fff;
  ` : `
    background-color: #fff;
    color: #888;
  `)}
`;