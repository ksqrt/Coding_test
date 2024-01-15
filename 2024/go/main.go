package main

import (
	"fmt"
)

type user struct {
	Id    int    `form:"id"`
	Name  string `form:"name"`
	Email string `form:"email"`
}
type point struct {
	x, y int
}
type Obj struct {
	Name string
	Age  int
}

func PrintObject(list []Obj) {
	for index, object := range list {
		fmt.Printf("index: %d, object: %+v\n", index, object)
	}
}

func main() {

	list := []Obj{
		{"Beckham", 11},
		{"Zidane", 7},
		{"Ronaldo", 9},
	}

	for _, object := range list {
		object.Age = object.Age * 2
	}

	//test
	// 출력, 11, 7, 9
	PrintObject(list)

	for index := range list {
		object := &list[index]
		object.Age = object.Age * 2
	}

	// 출력, 22, 14, 18
	PrintObject(list)

	for i := range list {
		list[i].Age *= 2 // Age 값을 0으로 설정
	}

	PrintObject(list)

	//------------------------------ 출력문 ------------------------------//
	// 배열에서 반복문 쓰기
	strArray := []string{"A", "B", "C"}

	for index, str := range strArray {
		fmt.Println(index, str)
	}

	//dict

	dict := map[string]string{
		"apple":  "red",
		"banana": "yellow",
	}

	for key, value := range dict {
		fmt.Printf("key :" + key + "value :" + value + "\n")
	}

	//------------------------------ go lang server ------------------------------//

	//r := gin.Default() // default settings
	//
	//// CASE 1. get 파라미터 받기
	//r.GET("/user", func(c *gin.Context) {
	//
	//	// test
	//
	//	// var 변수명 타입 으로 선언함
	//
	//	var userObj user
	//	if err := c.ShouldBindQuery(&userObj); err == nil {
	//		fmt.Printf("user obj - %+v \n", userObj)
	//	} else {
	//		fmt.Printf("error - %+v \n", err)
	//	}
	//	c.JSON(http.StatusOK, gin.H{
	//		"status": "ok",
	//		"data":   userObj,
	//	})
	//})
	//
	//// CASE 2. POST raw Json 받기
	//r.POST("/user2", func(c *gin.Context) {
	//	var userObj user
	//	if err := c.ShouldBindJSON(&userObj); err == nil {
	//		fmt.Printf("user obj - %+v \n", userObj)
	//	} else {
	//		fmt.Printf("error - %+v \n", err)
	//	}
	//
	//	c.JSON(http.StatusOK, gin.H{
	//		"status": "ok",
	//		"data":   userObj,
	//	})
	//})
	//
	//// CASE 3. POST form-data 받기
	//r.POST("/user3", func(c *gin.Context) {
	//	var userObj user
	//	if err := c.ShouldBind(&userObj); err == nil {
	//		fmt.Printf("user obj - %+v \n", userObj)
	//	} else {
	//		fmt.Printf("error - %+v \n", err)
	//	}
	//
	//	c.JSON(http.StatusOK, gin.H{
	//		"status": "ok",
	//		"data":   userObj,
	//	})
	//})
	//
	//r.Run("localhost:8080")
}
