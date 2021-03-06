# 편리 (편의점 리뷰)

- 기간 : 2021년 2월 1일 ~ 2월 28일
- [편식(편의점 식품)](http://www.pyeonsik.co.kr/)을 보고 만든 React-Native 앱으로 편의점 음식들에 대한 리뷰, 평점을 등록할 수 있고 가장 높은 평점이나 좋아요를 받은 음식들을 순위 별로 볼 수 있도록 만들었습니다. 리뷰, 평점은 로그인 한 사용자만 등록이 가능합니다. 유저, 음식 데이터는 GraphQL과 Apollo를 통해 MongoDB에 저장했으며, React에서는 Apollo-client를 이용하여 데이터를 가져와 보여주었습니다.
- Server : [github.com/zeroaan/cstore_server](https://github.com/zeroaan/cstore_server)

<br />

![screen](https://user-images.githubusercontent.com/48481448/110238648-3535de00-7f86-11eb-8095-c900119a4437.png)

<br />

### 사용 라이브러리

- react
- react-native
- react-router-native
- react-native-swiper
- react-native-vector-icons
- graphql
- apollo-client
- redux
- immer
- styled-components

<br />

### apollo

- heroku 로 배포한 server를 연결해준다.

```js
import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://*********.herokuapp.com/",
})

export default client
```

<br />

### useQuery / redux

- useQuery hooks를 통해 데이터를 받아오고 loading이 끝나고 받은 데이터를 dispatch를 통해 저장시켜준다.

```js
import { useDispatch } from "react-redux"
import { gql, useQuery } from "@apollo/client"
import { addFood } from "~/store/actions/food"

const GET_FOODS = gql`
  query {
    foods {
      _id
      name
      fullName
      price
      image
      liked
      sumStar
      category
      review {
        _id
        userid
        username
        date
        post
        star
      }
    }
  }
`
const dispatch = useDispatch()

const { loading, data } = useQuery(GET_FOODS)

useEffect(() => {
  data && dispatch(addFood(data.foods))
}, [loading])
```

<br />

### Redux

- 받은 데이터를 foods에 저장한다.

```js
import * as types from "../actions/types"
import produce from "immer"

const initialState = {
  foods: null,
}

const foodReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.ADD_FOOD: {
        draft.foods = action.data
        break
      }
      default:
        break
    }
  })
}

export default foodReducer
```

<br />

### Home

- 상단에는 어플명과 공지 또는 이벤트를 swiper를 통해 보여준다.
- Best 상품, 좋아요, 리뷰 많은 상위 10개의 상품들을 순서대로 볼 수 있다.

![home](https://user-images.githubusercontent.com/48481448/110239148-ea699580-7f88-11eb-9d56-3ff7f8d77f8b.gif)

```jsx
const bestLikedFoods = () => {
  return (
    foods &&
    [...foods].sort((a, b) => {
      return b.liked.length - a.liked.length
    })
  )
}
const bestReviewFoods = () => {
  return (
    foods &&
    [...foods].sort((a, b) => {
      return b.review.length - a.review.length
    })
  )
}

return (
  <Layout>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <HomeTop />
      <View style={styles.maincontainer}>
        {FoodData.map((fData) => (
          <View key={fData.id} style={styles.bestContainer}>
            <Text style={styles.bestText}>{fData.title}</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.bestFood}>
              {fData.data?.map((v) => (
                <FoodSimple key={v._id} item={v} />
              ))}
            </ScrollView>
          </View>
        ))}
      </View>
    </ScrollView>
  </Layout>
)
```

<br />

### Food Detail

- 해당 음식을 클릭 후 보여지는 화면으로 상세 정보와 리뷰가 보여진다.
- 좋아요, 리뷰 쓰기를 할 수 있다.

![fooddetail](https://user-images.githubusercontent.com/48481448/110239149-ec335900-7f88-11eb-8b5f-56feaa7a69a1.gif)

```js
import { useDispatch, useSelector } from "react-redux"
import { gql, useMutation } from "@apollo/client"
import { addFood } from "~/store/actions/food"

const LIKED_FOOD = gql`
  mutation updateFoodLiked($_id: ID!, $liked: String!) {
    updateFoodLiked(_id: $_id, liked: $liked) {
      _id
      name
      fullName
      price
      image
      liked
      sumStar
      category
      review {
        _id
        userid
        username
        date
        post
        star
      }
    }
  }
`

const [likedFood, { data }] = useMutation(LIKED_FOOD, {
  variables: { _id: food._id, liked: user?._id },
})

useEffect(() => {
  data && dispatch(addFood(data.updateFoodLiked))
}, [data])
```

<br />

### Food Review

- 리뷰 내용을 입력하고 별점을 선택한다. 별을 클릭하여 원하는 점수를 줄 수 있다.
- 리뷰 작성 시 useMutaion hooks를 통해 리뷰 내용을 MongoDB에 반영하고 redux 에도 바로 저장한다.

![foodreview](https://user-images.githubusercontent.com/48481448/108711578-e71de500-7558-11eb-8fa9-990c96577273.gif)

```js
import { useDispatch, useSelector } from "react-redux"
import { gql, useMutation } from "@apollo/client"
import { addFood } from "~/store/actions/food"

const [reviewFood, { data }] = useMutation(REVIEW_FOOD, {
  variables: {
    _id: foodId,
    userid: user?._id,
    username: user?.username,
    date: new Date(),
    post: inputPost,
    star: inputStar,
  },
})

useEffect(() => {
  data && dispatch(addFood(data.updateFoodReview))
}, [data])
```

<br />

### Sign up

- 회원가입 시 apollo/client의 useMutaion hooks를 통해 입력한 유저 정보를 MongoDB에 반영한다.
- 이메일, 닉네임 중복확인을 통해 유저 정보 중복을 방지한다.

![signup](https://user-images.githubusercontent.com/48481448/108711602-f00eb680-7558-11eb-9108-2a9e23b1a391.gif)

```js
import { gql, useQuery, useMutation } from "@apollo/client"

const CHECK_EMAIL = gql`
  query checkEmail($email: String!) {
    checkEmail(email: $email)
  }
`
const CHECK_NAME = gql`
  query checkUsername($username: String!) {
    checkUsername(username: $username)
  }
`
const SIGN_UP = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password)
  }
`
```

<br />

### Login

- 로그인 시 입력한 정보를 useMutation을 통해 해당 유저가 있는지 확인한다.
- 확인 후 있으면 dispatch를 통해 유저 정보를 저장한다.

![login](https://user-images.githubusercontent.com/48481448/108711620-f6049780-7558-11eb-8285-2bdd60a23cd6.gif)

```js
import { useDispatch } from "react-redux"
import { gql, useMutation } from "@apollo/client"
import { login } from "~/store/actions/user"

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      username
      email
      myliked
      myreview
    }
  }
`

const [loginMutation, { data }] = useMutation(LOGIN, {
  variables: { email: inputEmail, password: inputPassword },
})

useEffect(() => {
  data && dispatch(login(data?.login)) && loginCheck()
}, [data])

const loginCheck = () => {
  if (!inputEmail) {
    ToastAndroid.show("이메일을 입력해주세요.", ToastAndroid.SHORT)
  } else if (!inputPassword) {
    ToastAndroid.show("비밀번호를 입력해주세요.", ToastAndroid.SHORT)
  } else if (data && data.login) {
    history.push("/")
    ToastAndroid.show("로그인 완료", ToastAndroid.SHORT)
  } else {
    ToastAndroid.show(
      "가입되지 않은 이메일이거나,\n잘못된 비밀번호입니다.",
      ToastAndroid.SHORT,
    )
    setInputPassword("")
  }
}

const onPressLoginBt = async () => {
  await loginMutation()
}
```

<br />

### Logout

- 로그아웃 시 dispatch를 통해 유저 정보를 지워준다.

![logout](https://user-images.githubusercontent.com/48481448/108711629-f9981e80-7558-11eb-9b91-4f756d4bb3d1.gif)

```js
import * as types from "../actions/types"

const initialState = {
  user: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN: {
      return { ...state, user: action.data }
    }
    case types.LOGOUT: {
      return { ...state, user: null }
    }
    default:
      return state
  }
}

export default userReducer
```

<br />

### Search

- 입력한 검색어에 포함하는 편의점 음식들이 나열된다. 클릭 시 해당 음식 정보로 이동

![search](https://user-images.githubusercontent.com/48481448/110239153-edfd1c80-7f88-11eb-93d1-04add50decb4.gif)

```jsx
const Search = () => {
  const { starFoods } = useSelector((state) => state.food)

  const [inputText, setInputText] = useState("")
  const [searchFoods, setSearchFoods] = useState([])
  const [noFoods, setNoFoods] = useState(false)

  const onSubmitSearch = () => {
    if (!inputText) {
      ToastAndroid.show("검색어를 입력해주세요", ToastAndroid.SHORT)
      return
    }
    const foods = []
    starFoods.map((v) => v.name.includes(inputText) && foods.push(v))
    foods.length === 0 ? setNoFoods(true) : setNoFoods(false)
    setSearchFoods(foods)
  }

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.topText}>검색</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            value={inputText}
            onChangeText={(v) => setInputText(v)}
            placeholder="검색어를 입력해주세요"
            autoCapitalize="none"
            returnKeyType="search"
            maxLength={30}
            autoFocus
            onSubmitEditing={onSubmitSearch}
          />
          <Icon
            style={styles.searchIcon}
            name="search"
            color="rgb(0,175,175)"
            size={24}
            onPress={onSubmitSearch}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.foodContainer}>
            {searchFoods.map((v) => (
              <Food key={v._id} item={v} />
            ))}
            {searchFoods.length % 2 === 1 && (
              <View style={{ width: "40%", margin: 8 }} />
            )}
          </View>
          {noFoods && <Text style={styles.noFood}>검색 결과가 없습니다.</Text>}
        </ScrollView>
      </View>
    </Layout>
  )
}
```

<br />

### Food List

- 전체 음식을 보여주며, 카테고리를 선택해 해당 카테고리 음식만 볼 수 있다. 클릭 시 해당 음식 정보로 이동

![foodlist](https://user-images.githubusercontent.com/48481448/110239154-ef2e4980-7f88-11eb-8c45-e98659874e23.gif)

```jsx
const FoodList = () => {
  const { starFoods } = useSelector((state) => state.food)

  const [catState, setCatState] = useState("ALL")
  const [catFoods, setCatFoods] = useState(starFoods)

  useEffect(() => {
    let foods
    const category = ["라면", "과자", "음료"]

    if (catState === "ALL") {
      setCatFoods(starFoods)
      return
    } else if (catState === "기타") {
      foods = starFoods.filter((v) => !category.includes(v.category))
    } else {
      foods = starFoods.filter((v) => v.category === catState)
    }
    setCatFoods(foods)
  }, [catState])

  const SelectCategory = ({ v }) => {
    return (
      <TouchableOpacityStyled
        activeOpacity={0.7}
        onPress={() => setCatState(v)}
        $select={v === catState}>
        <TextCategory $select={v === catState}>{v}</TextCategory>
      </TouchableOpacityStyled>
    )
  }

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.topText}>모든 상품</Text>

        <View style={styles.categoryList}>
          <SelectCategory v="ALL" />
          <SelectCategory v="라면" />
          <SelectCategory v="과자" />
          <SelectCategory v="음료" />
          <SelectCategory v="기타" />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.foodContainer}>
            {catFoods.map((v) => (
              <Food key={v._id} item={v} />
            ))}
            {catFoods.length % 2 === 1 && (
              <View style={{ width: "40%", margin: 8 }} />
            )}
          </View>
        </ScrollView>
      </View>
    </Layout>
  )
}
```
