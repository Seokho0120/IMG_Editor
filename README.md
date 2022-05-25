# IMG_Editor

### 이미지 편집 툴

이미지를 정해진 공간 안에서 이동 / 회전 / 사이즈변경 / Crop / 저장 기능이 가능한 반응형 웹 페이지를 구현했습니다.

### 개발 기간

22.05.23(월) - 22.05.25(수)

### 실행 방법

1. npm start
2. 주소 뒤에 `/view` 입력

## Tech Stack

JavaScript(ES6) | React | React Router | react draggable | dom-to-image | FileSaver | react-image-crop

## 구현 영상

각 해당 기능은 버튼을 통해 동작되며, 동시 구현이 가능하게 구현했습니다.

### 이미지 이동 & 비활성화 영역 GrayScale 효과

이미지를 자유롭게 드래그할 수 있는 라이브러리 `react draggable`을 활용하여 구현했습니다.

'이동' 버튼 클릭 시 이미지를 이동시킬 수 있으며, 버튼을 클릭하지 않으면 이미지가 이동하지 않습니다.

활성화 Space외 나머지 영역에서는 이미지가 `GrayScale` 처리가 됩니다.

[이미지 드래그 참고 링크 1](https://www.npmjs.com/package/react-draggable) <br>
[이미지 드래그 참고 링크 2](https://wazacs.tistory.com/37)

![이동하기](https://user-images.githubusercontent.com/93597794/170236738-f0575f08-ba2e-46b3-9277-6325ecf41226.gif)

### 이미지 회전

'회전' 버튼 클릭 시 이미지가 지속적으로 `45도` 회전합니다.

![회전하기](https://user-images.githubusercontent.com/93597794/170236737-16f920c5-3f13-4b90-bce7-056cc8489ac1.gif)

### 이미지 사이즈 변경

'사이브 변경' 버튼 클릭 시 이미지가 지속적으로 `1.2배` 사이즈가 증가합니다.

![사이즈변경하기](https://user-images.githubusercontent.com/93597794/170236735-44aaf625-6a72-45f1-8b83-2af6326286de.gif)

### 이미지 Crop

이미지 Crop이 가능한 라이브러리 `react-image-crop`을 활영하여 구현했습니다.

처음 구현해보는 낯선 기능이었기 때문에 완벽하게 구현을 하지는 못했지만, 이미지와 이미지 외 영역까지 Crop할 수 있게 구현했습니다.

[이미지 Crop 참고 링크 1](https://www.npmjs.com/package/react-image-crop) <br>
[이미지 Crop 참고 링크 2](https://www.geeksforgeeks.org/how-to-crop-images-in-reactjs/) <br>
[이미지 Crop 참고 링크 3](https://codeamor.dev/react/2021-10-23/)

![크롭하기](https://user-images.githubusercontent.com/93597794/170236729-460de154-6dbc-4bec-ab6c-68439259dd67.gif)

### 이미지 저장

Dom 요소를 벡터나 래스터 이미지로 변환하는데 사용할 수 있는 자바스크립트 라이브러리 `dom-to-image`와 파일 내보내기 기능을 구현할 때 자주 사용되는 라이브러리 `filsaver`을 활용하여 이미지 저장 기능을 구현했습니다.

[이미지 저장 참고 링크 1](https://onlydev.tistory.com/75) <br>
[이미지 저장 참고 링크 2](https://intrepidgeeks.com/tutorial/generating-and-downloading-dom-to-image-images) <br>
[이미지 저장 참고 링크 3](https://www.npmjs.com/package/file-saver)

![제출하기](https://user-images.githubusercontent.com/93597794/170236725-7fe0773b-2c65-468e-824a-dd31f1b18a8d.gif)

### 브라우저 축소시 이미지 동시 축소

width에 가변형 크기를 설정해 브라우저 축소 시 이미지가 동시 축소 가능하게 구현했습니다.

![이미지 동시 축소](https://user-images.githubusercontent.com/93597794/170236718-8cea2983-4197-4719-a8c7-66179f08a280.gif)

### 기능 동시 구현

모든 기능이 자연스럽게 동시에 작동할 수 있도록 구현했습니다.

![동시 구현](https://user-images.githubusercontent.com/93597794/170236674-df5b17e9-d85c-4f15-b8af-2bdd49ad7eb4.gif)

## Blocker & Solved

Crop 기능을 구현하면서 Blocker를 만났습니다.

`react-image-crop` 라이브러리를 사용해 Crop을 구현하려면 `<ReactCrop>` 컴포넌트로 이미지를 감싸주거나 혹은 `<ReactCrop src={src}>` 처럼 src를 받아서 구현해야 했습니다.

처음엔 이미지를 감싸 구현을 했는데, 아래의 영상과 같이 이미지와 동일한 사이즈의 제한된 영역안에서만 Crop이 되는 현상을 만났습니다.

![크롭 블로커](https://user-images.githubusercontent.com/93597794/170253547-ce81f7a6-9d56-4d3d-b7c1-d6ec5c7e9263.gif)

이후 Crop 기능을 이미지 영역뿐만 아니라 전체 영역에서 사용할 수 있도록 리팩토링을 진행했습니다.

`<ReactCrop>` 컴포넌트의 위치를 다양한 곳에 이동시켜보고, `react-image-crop` 라이브러리에서 사이즈 조정이 가능한 속성이 있는지 학습하며 해결방법을 찾아보았습니다.

이 과정에서 사이즈를 조정할 수 있는 속성은 따로 없고, 컴포넌트의 위치를 재조정하는 것이 해결방법임을 알게되었으며

결론적으로, `<Board>` 컴포넌트에서 최상위에서 화면 전체를 감싸주면서 문제를 해결할 수 있었습니다.

### 리팩토링 이전 코드

```javascript
// <ActionImg>
<ReactCrop
  disabled={cropBoolean}
  crop={crop}
  onChange={(newCrop) => setCrop(newCrop)}
>
  <Img rotate={rotate} size={size} ref={setSubmit} />
</ReactCrop>

// <Board>
<Wrapper>
  <TopGray>
    <ButtonTools
      rotateImg={rotateImg}
      sizeChangeImg={sizeChangeImg}
      DownloadImg={DownloadImg}
      activeMove={activeMove}
      activeCrop={activeCrop}
    />
  </TopGray>
  <MidGray>
    <Left />
    <Mid>
      <ActionImg
        rotate={rotate}
        size={size}
        setSubmit={setSubmit}
        moveBoolean={moveBoolean}
        cropBoolean={cropBoolean}
      />
    </Mid>
    <Right />
  </MidGray>
  <BottomGray />
</Wrapper>
```

### 리팩토링 후 코드

```javascript
// <ActionImg>
<ImgWrapper>
  <Img rotate={rotate} size={size} ref={setSubmit} />
</ImgWrapper>

// <Board>
<ReactCrop
  disabled={cropBoolean}
  crop={crop}
  onChange={(newCrop) => setCrop(newCrop)}
>
  <Wrapper>
    <TopGray>
      <ButtonTools
        rotateImg={rotateImg}
        sizeChangeImg={sizeChangeImg}
        DownloadImg={DownloadImg}
        activeMove={activeMove}
        activeCrop={activeCrop}
      />
    </TopGray>
    <MidGray>
      <Left />
      <Mid>
        <ActionImg
          rotate={rotate}
          size={size}
          setSubmit={setSubmit}
          moveBoolean={moveBoolean}
        />
      </Mid>
      <Right />
    </MidGray>
    <BottomGray />
  </Wrapper>
</ReactCrop>
```
