### REST(REpresentational State Transfer)

: 현재 가장 널리 사용되고 있는 API 설계 규칙

- 자원(resource)의 표현(representation)에 의한 상태 전달
- **좁은 의미로 HTTP를 통해 CRUD(Create, Read, Update, Delete)를 실행하는 API를 뜻한다.**

<br>

<aside>
⭐ 설계 규칙

****Uniform Interface****

**Client - Server** (데이터스토리지 부분과, 유저 인터페이스를 분리하는 것)

**Stateless** (상태에 대한 정보를 따로 저장하거나 관리 하지 않는 것)

**Cacheable** (요청에 관한 응답을 따로 저장함으로써 추후에 재사용이 가능하게 하는 정책)

**Layered System** (복잡한 여러 기능을 계층화 시켜서 한 기능씩 순차적으로 진행하는 것)

**Code on Demand** (서버로부터 기능을 내려받아 클라이언트에서 바로 실행할 수 있어야 한다)

</aside>

<br>

- REST의 조건을 만족하는 API 엔드포인트 예시

| 요청 | RESTful API |
| --- | --- |
| user들의 정보를 get 하고자 함 | [GET] http://localhost:8000/users |
| starbucks에서 1번 beverages의 정보를 get 하고자 함 | [GET] http://starbucks.com/beverages/1 |
| starbucks에서 2번 beverage를 주문하고자 함 | [POST] http://starbucks.com/order - body {beverage:2} |

> `REST API`는 그 형식(주소) 만으로도 **API의 목적이 쉽게 이해**가 된다.
> 

<br>

### RESTful API

: 이런 REST 의 조건을 만족하는 API 를 **RESTful API** 라고 부르고, 이런 방식으로 API 를 작성하는 것을 **RESTful 하다**고 한다.

<br>

<aside>
📌  즉, ‘**RESTful하다’** 라는 것은 REST API의 설계의도를 명확하게 지켜주는 것

</aside>

<br>

ref : 

[https://hahahoho5915.tistory.com/63](https://hahahoho5915.tistory.com/63#:~:text=REST%20API%EB%8A%94%20%EB%B3%B4%ED%86%B5%20%EC%97%AC%EB%9F%AC,%EC%9D%84%20%EB%B0%98%ED%99%98%ED%95%98%EB%8A%94%20%EB%B0%A9%EC%8B%9D%EC%9D%B4%EB%8B%A4)
