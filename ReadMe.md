## API 동작 테스트를 위한 CLI

#### Type: JSON / POST
```
curl -d '{"key": "value"}' -H 'Content-Type: application/json' -X POST http://localhost:9000
```

#### Type: IMAGE / Multipart-Form-Data
```
curl 
-H "Content-Type: multipart/form-data" 
-F "title=title" 
-F "description=description" 
-F "image=@/Users/zeros/Desktop/Irean.jpg" 
http://localhost:3000/container/create
```

#### Type: x-www-form-urlencoded
```
curl 
-d "title=update&description=update"
-H "Content-Type: application/x-www-form-urlencoded"
-X PATCH http://localhost:3000/container/update
```

## 네트워크 성능(or 스트레스) 테스트를 위한 CLI

#### ab - 아파치 웹서버 성능검사 도구 (mac에는 기본적으로 설치되어있다)
- Guide
```
ab -n {요청 횟수} -c {동시요청 회수} {url}
```

- Example
```
ab -n 10 -c 2 http://localhost:3000/
```