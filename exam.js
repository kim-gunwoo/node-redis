const redis = require("redis");
const client = redis.createClient();

client.on("error", function (error) {
  console.error(error);
});

// redis.print : 수행결과 출력 혹은 오류 출력. redis.print는 없어도 상관없음. 없으면 결과 출력은 되지 않고 값만 저장
client.set("Key", "Value", redis.print);

client.get("Key", function (err, value) {
  if (err) throw err;
  console.log(value);
});

client.hmset(
  "hmset Key",
  {
    hmset_key_a: "hmset_value_a",
    hmset_key_b: "hmset_value_b",
  },
  redis.print
);

client.hset("Hash Key", "HashTest 1", "1", redis.print);
client.hset(["Hash Key", "HashTest 2", "2"], redis.print); // 해시 테이블 추가 및 결과 출력

client.hget("hmset Key", "hmset_key_a", function (err, value) {
  if (err) throw err;
  console.log("hmset_key_a is : " + value); // 해당 값 출력
});

client.hkeys("hmset Key", function (err, keys) {
  // hmset 의 해시테이블 모든 키 데이터 가져오기
  if (err) throw err;
  keys.forEach(function (key, i) {
    console.log("hmset Key " + i + " : " + key);
  });
});

client.lpush("tasks", "Node.js", redis.print); // 리스트에 값 추가
client.lpush("tasks", "Redis", redis.print);
client.lrange("tasks", 0, -1, function (err, items) {
  // 시작, 종료인자 이용해 리스트 항목 가져오기
  // -1는 리스트의 마지막 항목 의미, 즉 다 가져오기
  if (err) throw err;
  items.forEach(function (item, i) {
    console.log("list " + i + " : " + item);
  });
});

client.sadd("test", "중복", redis.print); // Reply : 1
client.sadd("test", "싱글", redis.print); // Reply : 1

client.sadd("test", "중복", redis.print); // Reply : 0    -> 두번째 저장으로 무시

client.sadd("test", "싱글2", redis.print); // Reply : 1

client.smembers("test", function (err, data) {
  console.log(data);
});
