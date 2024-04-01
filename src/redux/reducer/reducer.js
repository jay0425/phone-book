let initialState = {
  // 연락처가 저장되어 있을 장소가 필요하다. 아래의 코드를 친다. 타입은 배열이다.
  contactList: [],
};

// 리듀서는 항상 행동 지침들을 가지고 있다.
// 리듀서는 항상 리턴을 해주고, 리턴해준 값으로 스토어를 적용한다.
function reducer(state = initialState, action) {
  const { type, payload } = action;

  // ADD_CONTACT 액션이 발동될 때마다 연락처를 contactList에 추가해주면 된다.

  // 어레이 안의 값은 유지하되 뒤에 객체를 더해준다.
  // 객체에는 name, phoneNumber가 있다.
  /*
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contactList: [...state.contactList, { name: action.payload.name, phoneNumber: action.payload.phoneNumber }],
      };
    default:
      return { ...state };
  }

  ---> 이렇게 일일이 action dot, action dot 하면 번거롭다. action에서 바로 값을 뽑아와서 아래의 코드들처럼 입력하도록 한다.
  */
  switch (type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contactList: [...state.contactList, { name: payload.name, phoneNumber: payload.phoneNumber }],
      };
    default:
      return { ...state };
  }
}

export default reducer;
