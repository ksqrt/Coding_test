package main

import (
	"2024/models"
	"fmt"
)

func test(a *models.Info) {
	a.Id = 2
	fmt.Println(a)
}

func main() {

	// 구조체 호출
	var a models.Info

	fmt.Println(a)

	a.Id = 1
	a.Name = "test"
	a.Email = "222"

	fmt.Println(a)

	test(&a)

	//------------------------------ go lang server ------------------------------//

	//r := gin.Default() // default settings
	//
	//// CASE 1. get 파라미터 받기
	//r.GET("/user", func(c *gin.Context) {
	//bfdsfefㄹㅇㄹㅇ
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
