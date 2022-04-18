# wanted_pre_onboarding

![프리온보딩 이미지](https://velog.velcdn.com/images/peaches/post/92e65ee9-7438-4a39-bafd-388ffe3d80cd/image.png "wanted_pre_onboarding")

원티드 프리온보딩 프론트엔드 코스 사전 과제입니다.<br>
가독성과 구조화를 위해 CSS의 BEM방법론과 코딩컨벤션을 이용하였습니다.<br>
각 기능들을 구현하면서 코드설명과 구현하는 과정에서 어려웠던 점, 해결방법, 아쉬운 점 등을 기록하였습니다.
<br><br>

## Toggle

`input`요소가 `type="checkbox"`로 체크가 되면 선택된 항목으로 슬라이더가 이동하고 텍스트의 색상이 바뀌는 기능입니다. 어느 곳을 클릭하더라도 체크 및 해제가 불편하지 않도록 `<label>`로 자식요소들을 감싸주었습니다. `data-\*` 라는 HTML의 전역속성을 이용해 텍스트 데이터를 저장해두고 CSS에서 체크 및 해제가 되면 텍스트 색상이 변경될 수 있도록 구현하였습니다.
<br><br>

## Tab

먼저 `foods`라는 배열에 렌더링할 항목들을 문자열 데이터로 담았습니다.
그리고 사용자가 탭을 클릭하면 배열 인덱스에 맞게 인덱스를 변경할 수 있도록 `useState`에 초기값을 0으로 설정해두었습니다.
배열 메소드 중 정말 자주 쓰이는 `map()`을 이용해서 `foods`의 크기만큼 `<li>`를 생성해주었으며 `onClick` 속성에는 탭을 클릭하면 `currentIndex`를 클릭한 탭의 인덱스로 변경해주는 함수를 등록했으며 `classname`에 `clicked`라는 클래스를 추가해주는 코드를 조건식으로 작성했습니다. `clicked` 클래스가 추가되면 글자색이 검정색으로 변화합니다.
고민을 정말 많이 했던 부분은 탭을 클릭하면 아래쪽의 초록색 `Indicator`가 슬라이드 애니메이션으로 스무스하게 이동되어야 하는데 CSS의 `transform` 속성을 이용해보려다가 해당 인덱스 값을 가져올수가 없어서 인라인스타일로 <span style="color:orange"><strong>(해당인덱스 X 탭버튼 가로길이)</strong></span>만큼 이동시키는 표현식을 작성했습니다.
<br><br>

## Slider

처음 만들어보는 기능이기도 했지만 과제 가이드라인에 난이도가 4~30이라는 문구를 보고 살짝 겁을 먹었습니다.
`useState`를 이용해 만든 현재값과 현재값 변경함수를 선언해두었습니다.
input 태그의 `type=range` 속성을 써서 progressbar를 만든 후 최소값 최대값 스텝속성, 초기값을 설정한 후 `onChange`속성에 현재값변경함수로 클릭한 곳의 값을 대입하는 함수를 등록했습니다. 상단박스에 현재값을 표현식으로 대입해서 슬라이더의 위치에 맞게 값이 자동으로 변하도록 구현하였습니다. 하단의 버튼도 `onClick` 속성에 현재값변경함수를 등록해서 버튼과 맞는 값으로 슬라이더가 이동하도록 하였습니다.
Slider에서 어려웠던 점은 퍼센트가 채워진 곳은 배경색이 변화하는 기능을 구현하는 것이였습니다.
구글링을 해보니 CSS 가상선택자 `::-webkit-slider`, `::-moz-progressbar`, `::-ms-fill-lower` 등을 이용해서 구현하는 방법이 있었지만 브라우저가 다를 경우 적용이 안되는 문제점, 표준속성이 아닌 문제점 등이 있어서 고민이 많았습니다.
저의 방법이 좋은 방법인지는 모르겠지만 저는 `<span>`태그를 만든 후 `display:block`으로 설정해 `width`와 `height` 값을 줄 수 있도록 만들고 인라인스타일로 템플릿 리터럴 문법을 이용해 `width`값을 현재값만큼 실시간으로 변경할 수 있도록 구현하였습니다. 그리고 `progressbar`의 구간별 눈금표시도 span요소로 만든 후 현재값이 미리 배열에 선언해 둔 값보다 크거나 같으면 배경색이 채워질 수 있도록 인라인 스타일을 조건식으로 작성하였습니다. 사실 이 부분은 포기할까라는 고민을 하다가 구현한 부분이라 이 때 정말 성취감을 크게 느꼈었습니다. 한가지 아쉬운 점은 `slider-thumb`의 왼쪽 `border`를 채워지는 색상이 가린다는 점입니다. 그래서 `silder-thumb`에 `z-index`를 최상위로 올려보기도하고 여러가지 방법을 시도해보았지만 이부분을 해결 못한 점이 정말 아쉽습니다.
<br><br>

## Input

`useState`로 비밀번호를 보여주고 가릴 수 있는 상태, 에러상태를 나타낼 수 있는 상태, 유효한이메일인지 나타내는 상태, 이메일 값을 반환해주는 상태를 만들었습니다.
이메일을 입력할 `input`요소의 `onChange`속성에는 인수로 사용자가 입력한 텍스트를 이메일 정규표현식으로 검사해 `true`를 반환하면 체크아이콘의 색상이 변하고 에러메세지를 가립니다.
정규표현식이 `false`를 반환하거나 빈문자열이 들어온 상태에서 포커스가 해제되면 아이콘 색상이 변하지 않고 아래 에러메세지를 나타냅니다.
패스워드 입력창의 `type`은 기본값이 `password`이지만 아이콘을 클릭하면 `useState`의 상태변경함수를 통해 `type`이 `text`로 변하고 아이콘 색상과 모양이 변화합니다.
<br><br>

## Dropdown

드롭다운버튼을 누르면 옵션들이 토글될 수 있는 함수를 `&&` 연산자 조건식으로 작성하였습니다.
그리고 옵션들마다 `onClick` 속성에 상태변경함수를 등록해 선택한 옵션의 텍스트가 드롭다운버튼에 나타나고 클릭이 되면 옵션 토글 함수가 실행되어서 목록들이 사라집니다.
그리고 검색창에는 `onChange` 속성에 사용자가 입력한 텍스트를 받아와서 배열의 `filter()` 메소드로 `true`를 반환하는 값들을 다시 저장해 렌더링해주는 함수를 작성했습니다. 받아온 텍스트의 시작문자열들이 일치해야하기 때문에 `startsWith()`를 썼고, `toLowerCase()`를 이용해 대소문자를 구별하지 않도록 하였습니다.
이 부분에서 어려웠던 점은 검색창에 텍스트를 입력할 때 화면에 렌더링되는 옵션들이 한박자씩 늦게 반응을 했던 점입니다. 그래서 `useEffect()` Hook으로 함수를 감싸주고 의존성배열 안의 값이 변화할 때만 렌더링이 되도록 만들었습니다. 아쉬운 점은 옵션들을 렌더링해줄 `languages`라는 이름의 배열을 `useMemo()`로 최적화하라는 경고문이 떠서 해결방법을 찾아봤는데
도저히 적용이 안되서 해결하지 못했습니다. `useMemo` Hook을 책과 영상에서 수없이 봐왔지만 실제로 적용하려고하니 어려웠고 저의 부족함을 느꼈습니다.
<br><br>

5가지의 기능을 구현하면서 시간 가는 줄 몰랐고 기능들을 하나씩 구현하면서 큰 성취감을 느꼈습니다.
앞으로 어떤 문제가 나오더라도 해결할 수 있는 실력있는 개발자가 되는 것이 저의 목표입니다.
