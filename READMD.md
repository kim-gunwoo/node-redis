## Redis

## mac 에서 redis 설치

```

- Redis 설치
- brew install redis

- Redis 서비스 실행, 중지, 재시작
- brew services start redis
- brew services stop redis
- brew services restart redis

- redis 는 기본적으로 6379 포트를 사용한다.

- Redis 실행
- redis-server

```

## redis

```
- 데이터 조작하기 (키/값)
    set : 첫 번째 인자(키), 두 번째 인자(값), 출력을 통해 Redis에 데이터 추가 (redis.print는 없어도 무방함)
    get : 첫 번째 인자(키), 두 번째 인자(함수의 첫 번째 인자(err), 두 번째 인자(값)을 통해 출력

Redis에서 set은 일반적인 Key와 Value 한 쌍을 저장.
만약 키 한 쌍에 여러 값을 넣고 싶다면 hset이나 hmset을 사용

- 해시테이블(해시맵) 데이터 조작하기

    hmset : 해시테이블에 key로 식별되는 value 값들을 항목으로 추가 가능.
            첫 번째 인자(해시테이블명), 두 번째 인자들(항목들)

    hset : 해시테이블에 key로 식별되는 value 값들을 항목으로 추가. 단, hmset은 여러 개를 입력할 수 있지만 hset은 하나만 가능.

    hget : 해당 해시테이블에서, 인자로 받는 항목의 값을 가져옴.
            첫 번째 인자(해시테이블명), 두 번째 인자(항목), 세 번째 인자 함수(첫 번째 인자(에러), 두 번째 인자(항목값))

    hkeys: 해당 해시테이블의 저장된 항목의 키값을 가져옴.
            첫 번째 인자(해시테이블명), 두 번째 인자(함수(첫 번째 인자(에러), 두 번째 인자(항목의 키들))

- 리스트에 존재하는 데이터 조작하기
    리스트는 메모리가 허용하는 한 매우 많은 데이터를 저장할 수 있음.
    리스트의 길이가 길어지면 검색 속도 또한 느려지게 됨.

    lpush : 리스트에 값 추가
            (첫 번째 인자(리스트명), 두 번째 인자(값), 세 번째 인자(출력))

    lrange : 리스트에 값 가져오기.
            (첫 번째 인자(리스트명), 두 번째 인자(시작지점), 세 번째 인자(마지막지점), 네 번째 인자(함수(첫 번째 인자(에러), 두 번째 인자)값))

- SET에 데이터 조작하기
    SET은 순서가 없는 문자열의 모음
    유일한 요소만 저장. 즉, 중복 값이 없음.
    같은 값을 두 개 저장한다면, 두 번째 저장하려 하는 값은 무시.

    saad : set에 값을 추가
    smembers : 저장된 값을 반환

```

### Redis

- redis-cli