# InstaClone Web Client

## PKG Setup

- app init with cra typescript
  - npx create-react-app instaclone-web --template typescript
- pkg install
  - react-router-dom
  - react-helmet-async
  - react-hook-form
  - @apollo/client
  - graphql
  - styled-components
  - styled-reset
  - fontawesome stuff
    https://fontawesome.com/v5/docs/web/use-with/react#get-started
  - @types/react
  - @types/styled-components

## Front Structure Setup

- [x] Router
- [x] Authentication : Apollo Reactive Variables
- [x] Architecture
- [ ] Styles System

### Router

- 특정 URL로 가면 해당 Components 를 보여줌
- Browser Router
- Routes 는 한 번에 하나의 Route만 render 시켜줌 (기본적으로 react-router-dom 은 pattern matching 방식이기 때문에 url pattern 이 맞는 모든 Route들을 render 함)
- V6 부터는 exact를 쓰지 않아도 “/“ 와 같은 path를 자동 인식함
- BrowserRouter는 다음과 같이 basename 설정을 해줘야함

```js
  <BrowserRouter basename={process.env.PUBLIC_URL}>
```

- Router 들이 render 할 Component 를 만든다.
- 조건에 따라 어떤 component들을 render 할지 element prop에 작성한다.
- React Component 만들기 (Home.tsx / Login.tsx )
- Route path=“\*” , 해당 url에 맞는 route가 없는 것이므로 404 에러 페이지로 render
- 다른 방법으로 Navigate react-router-dom 컴포넌트를 이용해 지정 url 로 redirect 가능

## Authentication

### 8.5 Auth POC : proof of concept

### 8.6 Reactive Variables

- isLoggedIn variable을 어떻게 control 할 것인가.
- Apollo client 를 이용해서 graphql 을 이용함과 동시에 local state 도 다룰 수 있다.
- Apollo Reactive variables
- https://www.apollographql.com/docs/react/local-state/reactive-variables
- apollo.ts 파일을 만들어 reative variable function 을 정의하고 useReactiveVar을 이용해 컴포넌트에서 import 한 후 return 값을 변수로 할당한다.
