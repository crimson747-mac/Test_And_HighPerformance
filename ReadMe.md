## 테스트를 위한 CLI

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