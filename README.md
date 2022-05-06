# InstaClone Web Client

## Front Structure Setup

- [x] Router
- [x] Authentication : Apollo Reactive Variables
- [x] Architecture
- [x] Styles setup
- [x] typescript setup
  - [x] styled-components
  - [x] react-hook-form
  - [x] GraphQL
- [ ] Login / Sign up
  - [ ] Login UI
  - [ ] Signup UI
  - [ ] Forms
  - [ ] Helmet Component
  - [ ]

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

### 8.3 Router

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

### 8.5 Auth POC : proof of concept

### 8.6 Reactive Variables

- isLoggedIn variable을 어떻게 control 할 것인가.
- Apollo client 를 이용해서 graphql 을 이용함과 동시에 local state 도 다룰 수 있다.
- Apollo Reactive variables
- https://www.apollographql.com/docs/react/local-state/reactive-variables
- you can interact with variables anywhere in your application without using GraphQL syntax.
- Most importantly, modifying a reactive variable triggers an update of every active query that depends on that variable.
- apollo.ts 파일을 만들어 reative variable function 을 정의하고 useReactiveVar을 이용해 컴포넌트에서 import 한 후 return 값을 변수로 할당한다.

### 8.7 styled-components

- `styled-components` / `styled-reset` / `GlobalStyles`
- styled-components 는 React.js 를 사용할 때 CSS 작업을 할 수 있는 가장 좋은 방법이다
  https://styled-components.com/docs/basics#motivation

```js
const Title = styled.h1`
	color: ${(props) => (props.potato ? "red" : "blue")};
	${(props) => (props.potato ? "font-size:10px" : "font-size:100px")}
`;
```

- css와 prop을 쉽게 적용 가능한 component 를 만든다.

### 8.8 Themes on Styled Components

- ThemeProvider Wrapper는 하위 컴포넌트들이 theme 을 이용할 수 있도록 해준다.
- Reactive Variables 을 이용하여 theme의 state 를 관리할 수 있다.
- src 폴더 내에 styled.d.ts 파일을 만들어 theme 의 type을 선언(declare)하여 자동완성을 이용할 수 있다.

```js
import "styled-components";
declare module "styled-components" {
	export interface DefaultTheme {
		fontColor: string;
		bgColor: string;
	}
}
```

### 8.9 GlobalStyles on Styled Components

- [x] Styles System : styled-components / GlobalStyles / styled-reset

- GlobalStyles 를 만들어서 적용할 수 있다.

```typescript
export const GlobalStyles = createGlobalStyle`
  ${reset};
  body {
    background-color: ${(props) => props.theme.bgColor}
  }
`;

// App.tsx
return (
  <GlobalStyles />;
)
```

- styled-reset module을 적용하여 기본 CSS 값들을 모두 초기화시킬 수 있다.
- styled.d.ts 에서 styled-components theme 등을 type화할 수 있다.
- style component 에 prop type을 지정할 수 있다.

```tsx
interface IContainerProps {
	floating: boolean;
}

const Container = styled.div<IContainerProps>`
  box-shadow = ${(props) => (props.floating ? "" : "")}
`;

return <Container floating={true} />;
```

## Ch.9 typescript setup

### react-hook-form

```tsx

interface IForm {
  name:string;
  lastname?:string;
}

const App = () => {
  const {register, handleSubmit, getValues, setValue} = useForm<IForm>();
  const onValid =() => {
    const {name, lastName} = getValues()
  }
  return (
    <form onsubmit={handleSubmit(onValid)}>
      <input ref={register({required:true})} name="name" type="text">
      <input ref={register} name="lastName" type="text">
    </form>
  )
}
```

### graphql

- `npm i graphql` `npm i @graphql-codegen/cli -D`
- `npx graphql-codegen init`
- 초기화로 생성한 codegen.yml 파일이 생성되면 `npm i` 로 추가 플러그인 설치
- `npm run codegen`

```yml
overwrite: true
schema: "http://localhost:4000/graphql"
documents: "./src/**/*.{ts,tsx}"
generates:
  src/generated/graphql.tsx:
    plugins:
      - "typescript"
      - "typescript-operations"
      - "typescript-react-apollo"
  ./graphql.schema.json:
    plugins:
      - "introspection"
```

- `"typescript-operations"` plugin 덕분에 useQuery 나 useMutation 이 개별 type이 적용된 맞춤형 버전으로 사용할 수 있다. (ex useLoginMutation)

## Ch.10 Login and Signup

### Login UI Clone
