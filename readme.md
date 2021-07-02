# Q&A Borad

<br>

## ❗️ 프로젝트 소개

<br>

- 글 작성시 입력한 비밀번호로 수정, 삭제하는 게시판
- 개인 웹 사이트에 넣을 용도로 개발

<br>

## ❗️ 프로젝트 기간

<br>

- 2021.05.19 ~ 06.29 (1인)

<br>

## ❗️ 사용된 기술 & 라이브러리

<br>

- Front: React, Redux-toolkit, bulma(css)
- Back: Node(Express), MongoDB

<br>

## ❗️ 프로젝트 구현 내용

<br>

## 👉 Back-end

### 1. MongoDB를 이용한 게시글 CRUD 구현

- Post model을 만들고, 요청에 따라 적절한 Mongoose 메서드를 이용해서 CRUD를 구현했습니다.

```js
// 게시글 조회를 위한 요청처리 (+pagination)

// GET api/post
postRouter.get("/", async (req, res) => {
  try {
    let { page } = req.query;
    page = parseInt(page);
    let postsCount = await Post.find({}).countDocuments();
    let posts = await Post.find({})
      .sort({ createdAt: -1 })
      .skip(page * 5)
      .limit(5);
    return res.send({ posts, postsCount });
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err.message });
  }
});
```

## 👉 Front-end

### 1. 수정,삭제시 비밀번호 확인기능 구현

```js
// Detail.js

const requireEdit = () => {
  history.push(`/post/edit/${post._id}`);
};

const requireDelete = async () => {
  await dispatch(deletePost(post._id));
  await history.push("/");
};

// 비밀번호 확인
const onCheckPassword = (value) => {
  if (post.password !== value) return setPasswordError(true);

  // edit 모드일 때는 수정요청
  if (isEdit) requireEdit();
  // delete 모드일 때는 삭제요청
  else requireDelete();
};
```

### 2. 이벤트 캡쳐링을 이용한 modal 구현

- modal 컴포넌트 바깥 영역을 눌렀을 때, modal이 닫힐 수 있도록 구현했습니다.

```js
// hooks > useModal.js

const useModal = (isMore, initialState = false) => {
  const [opened, setOpened] = useState(initialState);

  useEffect(() => {
    if (!isMore) return;
    const listener = (e) => {
      if (
        e.target.className === "custom-modal" ||
        e.target.className === "more-icon"
      ) {
        return;
      }
      setOpened(false);
    };

    document.addEventListener("click", listener, { capture: true });

    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);
  // ...
};
```

### 3. pagination 구현

- 전체 페이지를 렌더링하고, 현재 페이지를 표시할 수 있도록 구현했습니다.

```js
const perPostCount = 5;
const totalPage = Math.ceil(postsCount / perPostCount);

const onClickpage = (number) => {
  history.push(`/?page=${number - 1}`);
  dispatch(editCurrentPage(number));
};

// page 렌더링 함수
const renderPagination = () => {
  let pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(
      <PageBackground currentPage={currentPage === i}>
        <Page key={i} onClick={() => onClickpage(i)}>
          {i}
        </Page>
      </PageBackground>
    );
  }
  return pages.map((page) => page);
};
```

<br>

## ❗️ 영상

<br>

- 글수정

<img src="https://github.com/jellybrown/basic-board/blob/master/board-edit.gif" width="700">

<br>

- pagination & 글쓰기

<img src="https://github.com/jellybrown/basic-board/blob/master/pagination_create.gif" width="700">

<br>

## ❗️ 만들면서 힘들었던 점

<br>

### 배포

간단한 배포만 할 줄 알아서 이번 기회에 AWS에 베포해볼 생각입니다.

<br>
