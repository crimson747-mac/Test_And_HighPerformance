const express = require('express');
const heapdump = require('heapdump');

const server = express();
const memoryLeak = [];

function LeadkObj() {};

// 메모리 누수와 같은 상황을 발생시키고 메모리 정보를 반환한다.
server.use('/leak', (req, res, next) => {
  // 의미 없는 객체를 생성해 배열에 저장한다.
  for(let i = 0; i < 10000; i++) {
    memoryLeak.push(new LeadkObj());
  }

  // 현재 메모리 상태를 반환한다.
  return res.send(`making memory leak. current memory uses: ${process.memoryUsage().rss / 1024 / 1024}MB`);
})


// 현재의 매모리 상태를 파일에 저장하고 파일 이름을 반환한다.
server.use('/heapdump', (req, res, next) => {
  let filename = Date.now() + '.heapsnapshot';
  heapdump.writeSnapshot(filename);

  return res.send(`Heapdump has generated in ${filename}`);
})

server.listen(3000);